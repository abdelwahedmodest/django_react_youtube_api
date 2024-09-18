from django.shortcuts import render

# Create your views here.
@api_view(['POST'])
def upload_video(request):
    video = request.FILES['video']
    title = request.data['title']
    description = request.data['description']
    # Gérer la sauvegarde de la vidéo et l'intégration avec l'API YouTube ou autre
    return Response({'status': 'success'})
