from rest_framework import generics
from .models import UserActivity
from .serializers import UserActivitySerializer

class UserActivityCreateView(generics.CreateAPIView):
	queryset = UserActivity.objects.all()
	serializer_class = UserActivitySerializer



