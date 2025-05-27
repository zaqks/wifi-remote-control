# chat/routing.py
from django.urls import re_path
from . import consumers

websocket_urlpatterns = [
    re_path(r'ws/kb/$', consumers.KbConsumer.as_asgi()),
    re_path(r'ws/tp/$', consumers.TpConsumer.as_asgi()),

]
