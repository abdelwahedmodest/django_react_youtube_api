from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build
from google.oauth2.credentials import Credentials
from django.shortcuts import redirect
from django.http import JsonResponse
from google_auth_oauthlib.flow import Flow


SCOPES = ['https://www.googleapis.com/auth/youtube.upload']

def youtube_oauth(request):
    flow = InstalledAppFlow.from_client_secrets_file(
        'client_secret.json', SCOPES)
    credentials = flow.run_local_server(port=0)
    # Sauvegarde les informations d'identification pour les réutiliser
    request.session['credentials'] = credentials_to_dict(credentials)
    return redirect('youtube_upload')

def credentials_to_dict(credentials):
    return {
        'token': credentials.token,
        'refresh_token': credentials.refresh_token,
        'token_uri': credentials.token_uri,
        'client_id': credentials.client_id,
        'client_secret': credentials.client_secret,
        'scopes': credentials.scopes
    }

def upload_video_to_youtube(request):
    credentials = Credentials(**request.session['credentials'])
    youtube = build('youtube', 'v3', credentials=credentials)

    body = {
        'snippet': {
            'title': 'smart video',
            'description': 'Description de la vidéo',
            'tags': ['test', 'start'],
            'categoryId': '22'  # Par exemple, 22 pour les "People & Blogs"
        },
        'status': {
            'privacyStatus': 'public'  # Peut être 'private', 'unlisted' ou 'public'
        }
    }
    
    with open('/programmer.mp4', 'rb') as video_file:
        request = youtube.videos().insert(
            part='snippet,status',
            body=body,
            media_body=MediaFileUpload(video_file, chunksize=-1, resumable=True)
        )
        response = request.execute()
    
    return JsonResponse(response)





def oauth2callback(request):
    flow = Flow.from_client_secrets_file(
        'client_secret.json',
        scopes=['https://www.googleapis.com/auth/youtube.upload'],
        redirect_uri='http://localhost:8000/oauth2callback'
    )
    authorization_response = request.build_absolute_uri()
    flow.fetch_token(authorization_response=authorization_response)

    credentials = flow.credentials
    request.session['credentials'] = credentials_to_dict(credentials)

    return JsonResponse({'status': 'OAuth 2.0 authentication complete'})
