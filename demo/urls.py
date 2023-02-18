from django.urls import path, include
from . import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register('books', views.BookViewSet)

urlpatterns = [
    path('first', views.first, name='first'),
    path('', include(router.urls)),
]