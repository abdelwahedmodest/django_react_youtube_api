from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views
from .views import VideoList
urlpatterns = [
    #path('', views.VideoList.as_view()),
   path('videos/', VideoList.as_view(), name='video-list'),
]
#this contains  many  iutil  code  its unique  mission  is  to  upload  data  and  video file
# to  database   and  recupere  them  if   necessary ,dont  manage  intelligently  relation  
#with  user,model  file   contain   configuration  already  existing  in   django_allauth