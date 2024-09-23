#from django.shortcuts import render

# Create your views here.
#@api_view(['POST'])
#def upload_video(request):
    #video = request.FILES['video']
    #title = request.data['title']
    #description = request.data['description']
    # Gérer la sauvegarde de la vidéo et l'intégration avec l'API YouTube ou autre
    #return Response({'status': 'success'})

from api.models import SocialPlatform,UserProfile,Video
from api.serializers import  UserProfileSerializer,SocialPlatformSerializer,VideoSerializer
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


class VideoList(APIView):
    """
    List all snippets, or create a new snippet.
    """
    def get(self, request, format=None):
        mesvideos = Video.objects.all()
        serializer = VideoSerializer(mesvideos, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = VideoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)