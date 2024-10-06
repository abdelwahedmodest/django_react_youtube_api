from rest_framework import serializers
from .models import Video

class VideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Video
        fields = ['id', 'title', 'description', 'tags', 'category_id', 'privacy_status', 'upload_date', 'video_url']
