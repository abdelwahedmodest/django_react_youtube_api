from django.urls import path
from .views import upload_media

urlpatterns = [
    path('api/upload/', upload_media, name='upload_media'),
]
