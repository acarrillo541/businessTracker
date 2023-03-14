from django.shortcuts import render
from rest_framework import generics, status
from .serializers import UserSerializer

from .models import JobInfo

class JobInfoView(generics.ListAPIView):
  model = JobInfo
  serializer_class = JobSerializer

