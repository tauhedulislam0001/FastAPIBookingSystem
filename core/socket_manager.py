import socketio
from core.socket_io import sio
from routes.socket import NoPrefixNamespace

sio.register_namespace(NoPrefixNamespace("/"))

def get_socketio_asgi_app(app):
    sio_asgi_app = socketio.ASGIApp(socketio_server=sio, other_asgi_app=app)
    return sio_asgi_app
