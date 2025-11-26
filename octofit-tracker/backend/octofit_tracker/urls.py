from django.urls import path, include
from rest_framework import routers

from tracker.views import ActivityViewSet, ProfileViewSet, TeamViewSet

router = routers.DefaultRouter()
router.register(r'activities', ActivityViewSet, basename='activity')
router.register(r'profiles', ProfileViewSet, basename='profile')
router.register(r'teams', TeamViewSet, basename='team')

urlpatterns = [
    path('api/', include(router.urls)),
]
