from django.db import models

class UserProfile(models.Model):
    name = models.CharField(max_length=100)
    profession = models.CharField(max_length=100)
    status = models.CharField(max_length=50)
    location = models.CharField(max_length=100)
    image = models.ImageField(upload_to='user_images/')

    def __str__(self):
        return self.name

