from django.urls import path
from .views import FacebookDataView
urlpatterns = [

path('api/facebook-data/', FacebookDataView.as_view(), name='facebook-data'),

]