from django.urls import path
from .views import kb, touchpad

app_name = "controller_app"
urlpatterns = [
    path('', kb, name="press"),
    path("touch", touchpad, name="touch")
]
