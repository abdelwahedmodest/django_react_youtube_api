from django.db import models
from django.contrib.auth.models import User

class UserActivity(models.Model):
	user = models.ForeignKey(User, on_delete=models.CASCADE)
	selected_date = models.DateField()
	activity_details = models.TextField()

	def __str__(self):
		return f"{self.user.username} - {self.selected_date}"



