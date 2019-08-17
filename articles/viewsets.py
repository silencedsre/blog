from .serializers import ImageUploadSerializer
from .models import ImageUpload
from rest_framework import viewsets

class ImageuploadViewSet(viewsets.ModelViewSet):
    queryset = ImageUpload.objects.all()
    serializer_class = ImageUploadSerializer
    permission_classes = []
