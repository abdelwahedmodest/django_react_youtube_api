from django.urls import path
from .views import youtube_oauth, upload_video_to_youtube
from .views import oauth2callback

urlpatterns = [
    path('youtube/oauth/', youtube_oauth, name='youtube_oauth'),
    path('youtube/upload/', upload_video_to_youtube, name='youtube_upload'),
    path('oauth2callback', oauth2callback, name='oauth2callback'),
]



