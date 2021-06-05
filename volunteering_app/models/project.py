from django.db import models

from .volunteer import Volunteer


class Project(models.Model):
    # Enumeration class
    class Status(models.TextChoices):
        CREATED = 'Created'
        OPENED = 'Opened'
        ON_GOING = 'On going'
        IN_PROGRESS = 'In progress'
        FINISHED = 'Finished'
        CANCELLED = 'Cancelled'

    date_created = models.DateTimeField(auto_now_add=True)

    owner = models.ForeignKey('Organisation', on_delete=models.CASCADE)
    # todo create an extra entity holding status and date to track the progress
    status = models.CharField(choices=Status.choices, default=Status.CREATED, max_length=255)
    volunteers = models.ManyToManyField('Volunteer', through=Volunteer.projects.through)
