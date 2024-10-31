#from django.urls import path
#from .views import UserActivityCreateView

#urlpatterns = [
##	path('api/user-activity/', UserActivityCreateView.as_view(), name='user-activity'),
#]
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ActionViewSet

# Créer un routeur DRF
router = DefaultRouter()
# Enregistrer la vue des actions avec le routeur
router.register(r'actions', ActionViewSet, basename='action')

urlpatterns = [
    # Inclure les URLs générées par le routeur DRF
    path('api/', include(router.urls)),
]
