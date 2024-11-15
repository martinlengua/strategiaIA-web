import os
from flask import Flask, render_template, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_socketio import SocketIO, emit
from sqlalchemy.orm import DeclarativeBase
from datetime import datetime
import locale
from chat_utils import get_chatbot_response

class Base(DeclarativeBase):
    pass

db = SQLAlchemy(model_class=Base)
app = Flask(__name__)
app.secret_key = os.environ.get("FLASK_SECRET_KEY") or "strategia-secret-key"
app.config["SQLALCHEMY_DATABASE_URI"] = os.environ.get("DATABASE_URL")
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

socketio = SocketIO(app)
db.init_app(app)

from models import Contact, Blog, ChatMessage

# Spanish month names
SPANISH_MONTHS = {
    'January': 'Enero',
    'February': 'Febrero',
    'March': 'Marzo',
    'April': 'Abril',
    'May': 'Mayo',
    'June': 'Junio',
    'July': 'Julio',
    'August': 'Agosto',
    'September': 'Septiembre',
    'October': 'Octubre',
    'November': 'Noviembre',
    'December': 'Diciembre'
}

@app.template_filter('spanish_date')
def spanish_date_filter(date):
    eng_date = date.strftime('%d de %B, %Y')
    for eng, esp in SPANISH_MONTHS.items():
        if eng in eng_date:
            return eng_date.replace(eng, esp)
    return eng_date

@socketio.on('send_message')
def handle_message(data):
    user_message = data['message']
    
    # Get response from OpenAI
    bot_response = get_chatbot_response(user_message)
    
    # Save to database
    chat_message = ChatMessage(
        user_message=user_message,
        bot_response=bot_response
    )
    db.session.add(chat_message)
    db.session.commit()
    
    # Emit response back to client
    emit('receive_message', {
        'response': bot_response,
        'timestamp': datetime.now().strftime('%H:%M')
    })

def init_sample_blog_posts():
    # Check if we already have blog posts
    if Blog.query.count() == 0:
        sample_posts = [
            {
                'title': 'El Futuro de la IA en los Negocios',
                'content': '''<p>La Inteligencia Artificial está revolucionando la forma en que operan las empresas. Desde la atención al cliente automatizada hasta el análisis predictivo, la IA se está convirtiendo en una parte integral de las operaciones comerciales modernas.</p>

<p>Áreas clave donde la IA está generando impacto:</p>
<ul>
<li>Automatización de Servicio al Cliente</li>
<li>Análisis Predictivo</li>
<li>Optimización de Procesos</li>
<li>Soporte en Toma de Decisiones</li>
</ul>

<p>Mirando hacia el futuro, la integración de la IA en los procesos empresariales solo se profundizará, creando organizaciones más eficientes e inteligentes.</p>''',
                'summary': 'Explora cómo la IA está transformando las operaciones comerciales modernas y qué nos depara el futuro.',
                'author': 'Dra. Sarah Chen'
            },
            {
                'title': 'Machine Learning: Una Guía Práctica',
                'content': '''<p>El Machine Learning ha emergido como una tecnología crucial en el panorama digital moderno. Esta guía explora aplicaciones prácticas y estrategias de implementación.</p>

<p>Componentes esenciales de la implementación de ML:</p>
<ul>
<li>Recolección y Preparación de Datos</li>
<li>Selección de Modelos</li>
<li>Entrenamiento y Validación</li>
<li>Despliegue y Monitoreo</li>
</ul>

<p>Comprender estos fundamentos es clave para una implementación exitosa de ML en cualquier organización.</p>''',
                'summary': 'Una guía completa para implementar machine learning en tu organización.',
                'author': 'Michael Rodriguez'
            },
            {
                'title': 'Ética en el Desarrollo de IA',
                'content': '''<p>A medida que la IA se vuelve más presente en nuestra vida diaria, las consideraciones éticas en su desarrollo son más importantes que nunca.</p>

<p>Consideraciones éticas clave:</p>
<ul>
<li>Privacidad y Seguridad de Datos</li>
<li>Sesgos Algorítmicos</li>
<li>Transparencia y Responsabilidad</li>
<li>Impacto Social</li>
</ul>

<p>Desarrollar sistemas de IA con principios éticos sólidos es crucial para construir confianza y asegurar un impacto social positivo.</p>''',
                'summary': 'Comprendiendo la importancia de las consideraciones éticas en el desarrollo de IA.',
                'author': 'Emma Thompson'
            }
        ]

        # Add sample posts to database
        for post_data in sample_posts:
            post = Blog(**post_data)
            db.session.add(post)
        
        db.session.commit()

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/blog')
def blog():
    try:
        posts = Blog.query.order_by(Blog.created_at.desc()).all()
        return render_template('blog.html', posts=posts)
    except Exception as e:
        app.logger.error(f"Error al obtener posts del blog: {str(e)}")
        return render_template('blog.html', posts=[])

@app.route('/blog/<int:post_id>')
def blog_post(post_id):
    try:
        post = Blog.query.get_or_404(post_id)
        return render_template('blog_post.html', post=post)
    except Exception as e:
        app.logger.error(f"Error al obtener el post {post_id}: {str(e)}")
        return render_template('error.html', message="Post del blog no encontrado"), 404

@app.route('/submit_contact', methods=['POST'])
def submit_contact():
    try:
        data = request.form
        contact = Contact()
        contact.name = data['name']
        contact.email = data['email']
        contact.message = data['message']
        db.session.add(contact)
        db.session.commit()
        return jsonify({"status": "success"})
    except Exception as e:
        app.logger.error(f"Error al enviar el formulario de contacto: {str(e)}")
        return jsonify({"status": "error", "message": str(e)})

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
        init_sample_blog_posts()
    socketio.run(app, host='0.0.0.0', port=5000, debug=True)
