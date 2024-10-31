from django.urls import path
from . import views

urlpatterns = [
    path('/users/', views.UserProfileListCreateView.as_view(), name='user-list-create'),
    path('/users/<int:pk>/', views.UserProfileDetailView.as_view(), name='user-detail'),
]
