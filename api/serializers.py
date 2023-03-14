from rest_framework import serializers
from api.models import JobInfo

class JobSerializer(serializers.ModelSerializer):
    class Meta:
        model=JobInfo
        fields = ('id', 'name')