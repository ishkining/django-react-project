from django.urls import path
from . import views
import rest_framework

urlpatterns = [
    path('first', views.first, name='first'),
]