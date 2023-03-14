from django.urls import path
from .views import JobInfoView

urlpatterns=[
  path('jobs', JobInfoView.as_view()),
]
