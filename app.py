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
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///strategia.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db.init_app(app)

from models import Contact

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/submit_contact', methods=['POST'])
def submit_contact():
    try:
        data = request.form
        contact = Contact(
            name=data['name'],
            email=data['email'],
            message=data['message'],
            created_at=datetime.utcnow()
        )
        db.session.add(contact)
        db.session.commit()
        return jsonify({"status": "success"})
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)})

with app.app_context():
    db.create_all()
