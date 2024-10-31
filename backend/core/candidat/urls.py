from django.urls import path
from candidat.views import submit_candidate

urlpatterns = [
    path('submit/', submit_candidate),
]

