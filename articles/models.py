import uuid
from django.db import models

def scramble_uploaded_filename(instance, filename):
    extension = filename.split('.')[-1]
    return "{}.{}".format(uuid.uuid4(), extension)

class ImageUpload(models.Model):
    image = models.ImageField('Uploaded Image',upload_to=scramble_uploaded_filename)