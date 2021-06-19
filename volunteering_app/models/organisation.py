from django.db import models

from volunteering_app.models.contact_person import ContactPerson

DEFAULT_ORGANISATION_PICTURE = ...


class Organisation(models.Model):
    date_created = models.DateTimeField(auto_now_add=True)

    name = models.CharField(max_length=255)
    description = models.CharField(max_length=1024)

    contact_persons = models.ManyToManyField('ContactPerson', through=ContactPerson.organisations.through)

    # bank_account = ...
    # https://pypi.org/project/django-iban/0.3.0/
    # HAS social media

    # image = models.ImageField(default=DEFAULT_ORGANISATION_PICTURE)
