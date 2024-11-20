import os
from flask import Flask, render_template, request, jsonify
from flask_socketio import SocketIO, emit
from datetime import datetime
from supabase import create_client, Client

app = Flask(__name__)
app.secret_key = os.environ.get("FLASK_SECRET_KEY") or "strategia-secret-key"

# Initialize Supabase client
SUPABASE_URL = os.environ.get("SUPABASE_URL")
SUPABASE_KEY = os.environ.get("SUPABASE_KEY")
supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

socketio = SocketIO(app)

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
    
    # Save to Supabase
    chat_message = {
        "user_message": user_message,
        "bot_response": bot_response,
        "created_at": datetime.now().isoformat()
    }
    supabase.table("ChatMessage").insert(chat_message).execute()
    
    # Emit response back to client
    emit('receive_message', {
        'response': bot_response,
        'timestamp': datetime.now().strftime('%H:%M')
    })

def init_sample_blog_posts():
    # Check if we already have blog posts
    response = supabase.table("Blog").select("*").execute()
    if len(response.data) == 0:
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
                'author': 'Dra. Sarah Chen',
                'created_at': datetime.now().isoformat()
            },
            # Other sample posts
        ]

        # Add sample posts to Supabase
        for post_data in sample_posts:
            supabase.table("Blog").insert(post_data).execute()

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/blog')
def blog():
    try:
        response = supabase.table("Blog").select("*").order("created_at", desc=True).execute()
        posts = response.data
        return render_template('blog.html', posts=posts)
    except Exception as e:
        app.logger.error(f"Error al obtener posts del blog: {str(e)}")
        return render_template('blog.html', posts=[])

@app.route('/blog/<int:post_id>')
def blog_post(post_id):
    try:
        response = supabase.table("Blog").select("*").eq("id", post_id).execute()
        if response.data:
            post = response.data[0]
            return render_template('blog_post.html', post=post)
        else:
            return render_template('error.html', message="Post del blog no encontrado"), 404
    except Exception as e:
        app.logger.error(f"Error al obtener el post {post_id}: {str(e)}")
        return render_template('error.html', message="Post del blog no encontrado"), 404

@app.route('/submit_contact', methods=['POST'])
def submit_contact():
    try:
        data = request.form
        contact = {
            "name": data['name'],
            "email": data['email'],
            "message": data['message'],
            "created_at": datetime.now().isoformat()
        }
        supabase.table("Contact").insert(contact).execute()
        return jsonify({"status": "success"})
    except Exception as e:
        app.logger.error(f"Error al enviar el formulario de contacto: {str(e)}")
        return jsonify({"status": "error", "message": str(e)})

@app.route('/servicios/citas')
def citas():
    return render_template('citas.html')

if __name__ == '__main__':
    with app.app_context():
        init_sample_blog_posts()
    socketio.run(app, host='0.0.0.0', port=5000, debug=True)
