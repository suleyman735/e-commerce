# myapp/urls.py
from django.urls import path
from .views import RegisterView, LoginView,ListAllUsersView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('users/', ListAllUsersView.as_view(), name='list-all-users'),

]
