from django.db import models

class Candidate(models.Model):
    actively_looking = models.BooleanField(default=False)
    job_type = models.CharField(max_length=255, choices=[
        ('full_time', 'Temps plein'),
        ('part_time', 'Temps partiel'),
        ('freelance', 'Freelance'),
        ('other', 'Autre')
    ])
    other_job = models.CharField(max_length=255, blank=True, null=True)
    willing_to_learn = models.BooleanField(default=False)

    def __str__(self):
        return f"Candidate {self.id}"


