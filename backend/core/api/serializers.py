from rest_framework import serializers
from .models import UserProfile, Video, SocialPlatform

class UserProfileSerializer(serializers.ModelSerializer):
	class Meta:
		model = UserProfile
		fields = ['user', 'youtube_token', 'instagram_token', 'facebook_token', 'twitter_token']

class VideoSerializer(serializers.ModelSerializer):
	class Meta:
		model = Video
		fields = ['user', 'title', 'description', 'video_file', 'keywords', 'hashtags', 'created_at', 'published_on_youtube', 'published_on_instagram', 'published_on_facebook', 'published_on_twitter']

class SocialPlatformSerializer(serializers.ModelSerializer):
	class Meta:
		model = SocialPlatform
		fields = ['name', 'api_key', 'api_secret']
