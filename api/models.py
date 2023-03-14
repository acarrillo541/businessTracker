from django.db import models

class JobInfo(models.Model):
    number = models.IntegerField()
    name = models.CharField()
    date = models.DateField()
    address = models.CharField()
    status = models.CharField()

    def __str__(self):
        return name

