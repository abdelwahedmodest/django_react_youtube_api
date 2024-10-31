from django.urls import path
from .views import upload_media

urlpatterns = [
    path('api/upload/', upload_media, name='upload_media'),
]
#contient  media_upload  with  unique  function  of
#   sending  data ,image  and  file of  user