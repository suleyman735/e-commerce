

# Create your models here.
# myapp/models.py
from django.contrib.auth.models import AbstractUser, Group, Permission
from django.db import models

class CustomUser(AbstractUser):
    # Include standard fields from AbstractUser
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=128)
    username = models.CharField(max_length=150, unique=True)
    name = models.CharField(max_length=255)
    surname = models.CharField(max_length=100, blank=True, null=True)
    security_question_1 = models.CharField(max_length=255, blank=True, null=True)
    security_answer_1 = models.CharField(max_length=255, blank=True, null=True)




    
     # Add unique related names for groups and user_permissions
    groups = models.ManyToManyField(Group, related_name='customuser_groups', blank=True)
    user_permissions = models.ManyToManyField(Permission, related_name='customuser_user_permissions', blank=True)


    def __str__(self):
        return self.username
