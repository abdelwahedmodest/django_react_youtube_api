from django.db import models

class MediaUpload(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    keywords = models.CharField(max_length=255)
    hashtags = models.CharField(max_length=255)
    video = models.FileField(upload_to='videos/')  # Video upload path
    image = models.ImageField(upload_to='images/')  # Image upload path
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
