from django.urls import path
from .views import controller_app

urlpatterns = [
    path('', controller_app, name='controller_app'),
]
