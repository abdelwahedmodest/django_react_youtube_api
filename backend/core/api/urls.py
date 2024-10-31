from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views
from .views import VideoList
urlpatterns = [
    #path('', views.VideoList.as_view()),
   path('videos/', VideoList.as_view(), name='video-list'),
]
