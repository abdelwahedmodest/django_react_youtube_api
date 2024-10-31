from rest_framework import serializers
from api.models import Video

class VideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Video
        fields = ['id', 'user', 'title', 'description', 'video_file', 'keywords', 'hashtags', 'created_at', 
                  'published_on_youtube', 'published_on_instagram', 'published_on_facebook', 'published_on_twitter']
        read_only_fields = ['created_at', 'user']
