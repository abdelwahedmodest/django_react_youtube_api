from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import MediaUpload
from allauth.socialaccount.providers.google.provider import GoogleProvider
from allauth.socialaccount.providers.oauth2.client import OAuth2Error
@csrf_exempt
def upload_media(request):
    if request.method == 'POST':
        title = request.POST.get('title')
        description = request.POST.get('description')
        keywords = request.POST.get('keywords')
        hashtags = request.POST.get('hashtags')

        video = request.FILES.get('video')
        image = request.FILES.get('image')

        # Save the data to the database
        media = MediaUpload.objects.create(
            title=title,
            description=description,
            keywords=keywords,
            hashtags=hashtags,
            video=video,
            image=image
        )

        return JsonResponse({'message': 'Upload successful'}, status=201)
    
    return JsonResponse({'error': 'Invalid request method'}, status=400)



def social_login(request):
    # Recevoir le token et authentifier
    pass