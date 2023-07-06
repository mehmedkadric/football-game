from django.urls import path
from . import views

urlpatterns = [
    # Existing URL patterns
    path('check-username/', views.check_username_availability, name='check_username_availability'),
    path('get-question/', views.get_question, name='get_question'),
    path('leaderboard/', views.leaderboard, name='leaderboard'),
]
