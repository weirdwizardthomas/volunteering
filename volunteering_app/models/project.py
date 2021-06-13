from django.db import models

from .contact_person import ContactPerson
from .volunteer import Volunteer

DEFAULT_PROJECT_PICTURE = ...


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
    contact_persons = models.ManyToManyField('ContactPerson', through=ContactPerson.projects.through)

    image = models.ImageField(default=DEFAULT_PROJECT_PICTURE)
