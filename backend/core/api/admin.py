from django.contrib import admin
from .models import UserProfile, Video, SocialPlatform

@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    list_display = ('id', 'user_id', 'youtube_token', 'instagram_token', 'facebook_token', 'twitter_token')
    search_fields = ('user_id', 'youtube_token', 'instagram_token', 'facebook_token', 'twitter_token')
    list_filter = ('user_id',)

@admin.register(Video)
class VideoAdmin(admin.ModelAdmin):
    list_display = ('id', 'user_id', 'title', 'description', 'video_file', 'created_at', 'published_on_youtube', 'published_on_instagram', 'published_on_facebook', 'published_on_twitter')
    search_fields = ('title', 'description', 'keywords', 'hashtags')
    list_filter = ('published_on_youtube', 'published_on_instagram', 'published_on_facebook', 'published_on_twitter')
    date_hierarchy = 'created_at'
    ordering = ('-created_at',)

@admin.register(SocialPlatform)
class SocialPlatformAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'api_key', 'api_secret')
    search_fields = ('name', 'api_key')
    list_filter = ('name',)

