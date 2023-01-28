from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class UserProfile(models.Model):
    name=models.CharField(max_length=200),
    user = models.OneToOneField(User,on_delete=models.CASCADE)

