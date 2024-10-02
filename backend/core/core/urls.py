
from django.contrib import admin
from django.urls import path,include
from rest_framework import  routers
from api  import  views
from django.conf import settings
from django.conf.urls.static import static

from rest_framework_simplejwt.views import (
TokenObtainPairView,
TokenRefreshView,
)


router=routers.DefaultRouter()

urlpatterns =router.urls

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('Ab/', views.VideoList.as_view()),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('', include('contactus.urls')),
    path('accounts/', include('allauth.urls')),

]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

