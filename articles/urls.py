from django.urls import path, include
from django.conf.urls import url
from rest_framework import routers
from .viewsets import ImageuploadViewSet
router = routers.DefaultRouter()
router.register('images', ImageuploadViewSet,'images')

urlpatterns = [
    url(r'^', include(router.urls)),
]