from app import app, socketio

app = Flask(__name__)
socketio = SocketIO(app)

if __name__ == "__main__":
    socketio.run(app)
                 
#, host="0.0.0.0", port=3000, debug=True)
