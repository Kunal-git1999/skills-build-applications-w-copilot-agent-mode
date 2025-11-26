from django.urls import path, include
from rest_framework import routers
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

from tracker.views import RegisterView

from tracker.views import ActivityViewSet, ProfileViewSet, TeamViewSet

router = routers.DefaultRouter()
router.register(r'activities', ActivityViewSet, basename='activity')
router.register(r'profiles', ProfileViewSet, basename='profile')
router.register(r'teams', TeamViewSet, basename='team')

urlpatterns = [
    path('api/', include(router.urls)),
    # auth endpoints (JWT)
    path('api/auth/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/auth/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    # custom register endpoint
    path('api/auth/register/', RegisterView.as_view(), name='register'),
]
