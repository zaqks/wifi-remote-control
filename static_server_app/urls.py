from django.urls import path
from .views import media_server

urlpatterns = [path("static/<path:path>", media_server)]
