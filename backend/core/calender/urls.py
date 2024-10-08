from django.urls import path
from .views import UserActivityCreateView

urlpatterns = [
	path('api/user-activity/', UserActivityCreateView.as_view(), name='user-activity'),
]
