from django.db import models

class Video(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    tags = models.JSONField()  # Pour stocker les mots-clés sous forme de liste
    category_id = models.CharField(max_length=10)
    privacy_status = models.CharField(max_length=10, choices=[
        ('public', 'Public'),
        ('private', 'Private'),
        ('unlisted', 'Unlisted')
    ])
    upload_date = models.DateTimeField(auto_now_add=True)
    video_url = models.URLField(null=True, blank=True)

    def __str__(self):
        return self.title

