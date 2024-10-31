#from rest_framework import generics
#from .models import UserActivity
#from .serializers import UserActivitySerializer

#class UserActivityCreateView(generics.CreateAPIView):
#	queryset = UserActivity.objects.all()
#	serializer_class = UserActivitySerializer

from rest_framework import viewsets
from .models import Action
from .serializers import ActionSerializer

class ActionViewSet(viewsets.ModelViewSet):
	queryset = Action.objects.all()
	serializer_class = ActionSerializer


