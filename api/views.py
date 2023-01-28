from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import UserProfile
from .serializers import UserSerializer

# Create your views here.
def index(request):
  return HttpResponse("Hello world")

def users(request):
  #invoke serializer and return to comment
  data=UserProfile.objects.all()
  serializer=UserSerializer(data,many=True)
  return JsonResponse({'user_profile':serializer.data})