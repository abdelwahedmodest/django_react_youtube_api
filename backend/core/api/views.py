from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from api.models import Video
from api.serializers import VideoSerializer
from rest_framework.permissions import IsAuthenticated

class VideoList(APIView):
    """
    Permet à un utilisateur authentifié de télécharger une vidéo et de la récupérer.
    """
    permission_classes = [IsAuthenticated]

    def get(self, request, format=None):
        # Récupérer toutes les vidéos de l'utilisateur connecté
        videos = Video.objects.filter(user=request.user)
        serializer = VideoSerializer(videos, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        # Ajouter l'utilisateur à la requête avant de valider et sauvegarder
        request.data['user'] = request.user.id
        serializer = VideoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
