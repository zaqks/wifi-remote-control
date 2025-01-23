from django.urls import path
from .views import controler_app

app_name = "controller_app"
urlpatterns = [path('', controler_app, name="press")]
