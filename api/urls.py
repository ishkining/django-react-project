from django.urls import path
from django.conf.urls import include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register('users', views.UserViewSet)
router.register('movies', views.MovieViewSet)
router.register('ratings', views.RatingViewSet)

urlpatterns = [
    path('', include(router.urls))
]