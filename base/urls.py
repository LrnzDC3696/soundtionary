from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('', views.avatars),
    path('room', views.room),
]
