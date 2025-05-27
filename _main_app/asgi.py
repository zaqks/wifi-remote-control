# myproject/asgi.py
import os
from channels.routing import ProtocolTypeRouter, URLRouter
from channels.auth import AuthMiddlewareStack
from django.core.asgi import get_asgi_application
import controller_app.routing

os.environ.setdefault('DJANGO_SETTINGS_MODULE', '_main_app.settings')

application = ProtocolTypeRouter({
    "http": get_asgi_application(),
    "websocket": AuthMiddlewareStack(
        URLRouter(
            controller_app.routing.websocket_urlpatterns
        )
    ),
})
