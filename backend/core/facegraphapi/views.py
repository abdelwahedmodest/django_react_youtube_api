#Créer une vue pour récupérer les données de l'API Graph
#Dans votre application Django, créez une vue qui sera 
# responsable de la récupération des informations depuis l'API Graph de Facebook :

import requests
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

class FacebookDataView(APIView):
    permission_classes=[IsAuthenticated]
    
    def get(self, request):
        user = request.user
        access_token =user.socialaccount_set.get(provider='facebook').socialtoken_set.first().token
        # Récupérer les pages
        pages_url =f'https://graph.facebook.com/v12.0/me/accounts?access_token={access_token}'
        pages_response = requests.get(pages_url).json()
        # Récupérer les posts (par exemple)
        posts_url =f'https://graph.facebook.com/v12.0/me/posts?access_token={access_token}'
        posts_response = requests.get(posts_url).json()
        return Response({
            'pages': pages_response.get('data', []),
            'posts': posts_response.get('data', [])
            })
