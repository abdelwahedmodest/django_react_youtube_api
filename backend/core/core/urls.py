
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
    path('api/', include('api.urls')),  # Inclure les URLs de votre application `api`
    path('', include('contactus.urls')),
    path('', include('youtubeapi.urls')),
    path('', include('calender.urls')),
    path('', include('facegraphapi.urls')),
    path('use', include('user.urls')),
    path('api-auth/', include('rest_framework.urls')),
    path('accounts/', include('allauth.urls')),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('',include('candidat.urls')),
    #path('ab/', views.VideoList.as_view()),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

