from app import app, socketio

if __name__ == "__main__":
    socketio.run(app, host="0.0.0.0", port=3000, debug=True, allow_unsafe_werkzeug=True)
