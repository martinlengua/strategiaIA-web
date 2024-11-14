import os
from flask import Flask, render_template, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import DeclarativeBase
from datetime import datetime

class Base(DeclarativeBase):
    pass

db = SQLAlchemy(model_class=Base)
app = Flask(__name__)
app.secret_key = os.environ.get("FLASK_SECRET_KEY") or "strategia-secret-key"
app.config["SQLALCHEMY_DATABASE_URI"] = os.environ.get("DATABASE_URL")
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db.init_app(app)

from models import Contact, Blog

def init_sample_blog_posts():
    # Check if we already have blog posts
    if Blog.query.count() == 0:
        sample_posts = [
            {
                'title': 'The Future of AI in Business',
                'content': '''<p>Artificial Intelligence is revolutionizing the way businesses operate. From automated customer service to predictive analytics, AI is becoming an integral part of modern business operations.</p>

<p>Key areas where AI is making an impact:</p>
<ul>
<li>Customer Service Automation</li>
<li>Predictive Analytics</li>
<li>Process Optimization</li>
<li>Decision Making Support</li>
</ul>

<p>As we look to the future, the integration of AI in business processes will only deepen, creating more efficient and intelligent organizations.</p>''',
                'summary': 'Explore how AI is transforming modern business operations and what the future holds.',
                'author': 'Dr. Sarah Chen'
            },
            {
                'title': 'Machine Learning: A Practical Guide',
                'content': '''<p>Machine Learning has emerged as a crucial technology in the modern digital landscape. This guide explores practical applications and implementation strategies.</p>

<p>Essential components of ML implementation:</p>
<ul>
<li>Data Collection and Preparation</li>
<li>Model Selection</li>
<li>Training and Validation</li>
<li>Deployment and Monitoring</li>
</ul>

<p>Understanding these fundamentals is key to successful ML implementation in any organization.</p>''',
                'summary': 'A comprehensive guide to implementing machine learning in your organization.',
                'author': 'Michael Rodriguez'
            },
            {
                'title': 'Ethics in AI Development',
                'content': '''<p>As AI becomes more prevalent in our daily lives, ethical considerations in AI development are more important than ever.</p>

<p>Key ethical considerations:</p>
<ul>
<li>Data Privacy and Security</li>
<li>Algorithmic Bias</li>
<li>Transparency and Accountability</li>
<li>Social Impact</li>
</ul>

<p>Developing AI systems with strong ethical principles is crucial for building trust and ensuring positive societal impact.</p>''',
                'summary': 'Understanding the importance of ethical considerations in AI development.',
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
        app.logger.error(f"Error fetching blog posts: {str(e)}")
        return render_template('blog.html', posts=[])

@app.route('/blog/<int:post_id>')
def blog_post(post_id):
    try:
        post = Blog.query.get_or_404(post_id)
        return render_template('blog_post.html', post=post)
    except Exception as e:
        app.logger.error(f"Error fetching blog post {post_id}: {str(e)}")
        return render_template('error.html', message="Blog post not found"), 404

@app.route('/submit_contact', methods=['POST'])
def submit_contact():
    try:
        data = request.form
        contact = Contact(
            name=data['name'],
            email=data['email'],
            message=data['message']
        )
        db.session.add(contact)
        db.session.commit()
        return jsonify({"status": "success"})
    except Exception as e:
        app.logger.error(f"Error submitting contact form: {str(e)}")
        return jsonify({"status": "error", "message": str(e)})

with app.app_context():
    db.create_all()
    init_sample_blog_posts()
