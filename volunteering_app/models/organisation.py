from django.db import models


class Organisation(models.Model):
    date_created = models.DateTimeField(auto_now_add=True)

    name = models.CharField(max_length=255)
    description = models.CharField(max_length=1024)
