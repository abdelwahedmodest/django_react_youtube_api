from django.db import models
from django.contrib.auth.models import User

class SocialPlatform(models.Model):
	name = models.CharField(max_length=100, unique=True)
	api_key = models.CharField(max_length=255)
	api_secret = models.CharField(max_length=255)

	def __str__(self):
		return self.name

class UserProfile(models.Model):
	user = models.OneToOneField(User, on_delete=models.CASCADE)
	youtube_token = models.CharField(max_length=255, blank=True, null=True)
	instagram_token = models.CharField(max_length=255, blank=True, null=True)
	facebook_token = models.CharField(max_length=255, blank=True, null=True)
	twitter_token = models.CharField(max_length=255, blank=True, null=True)

	def __str__(self):
		return self.user.username

class Video(models.Model):
	user = models.ForeignKey(User, on_delete=models.CASCADE)
	title = models.CharField(max_length=255)
	description = models.TextField()
	video_file = models.FileField(upload_to='videos/')
	keywords = models.JSONField()
	hashtags = models.JSONField()
	created_at = models.DateTimeField(auto_now_add=True)
	published_on_youtube = models.BooleanField(default=False)
	published_on_instagram = models.BooleanField(default=False)
	published_on_facebook = models.BooleanField(default=False)
	published_on_twitter = models.BooleanField(default=False)

	def __str__(self):
		return self.title

