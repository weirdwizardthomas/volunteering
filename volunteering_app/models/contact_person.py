from django.db import models
from phone_field import PhoneField


class ContactPerson(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    phone_number = PhoneField()

    organisations = models.ManyToManyField('Organisation')
    projects = models.ManyToManyField('Project')
    # HAS social media


