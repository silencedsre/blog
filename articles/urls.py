from django.urls import path, include
from django.conf.urls import url
from rest_framework import routers
from .viewsets import ImageuploadViewSet
from .views import BlogViewSet
router = routers.DefaultRouter()
router.register('images', ImageuploadViewSet,'images')
router.register(r'blog', BlogViewSet, basename='blog')

urlpatterns = [
    url(r'^', include(router.urls)),
]