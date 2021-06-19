from django.db import models
from phone_field import PhoneField

STR_FORMAT = '{name} | id: {id}'


class ContactPerson(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    phone_number = PhoneField(blank=True, null=True)

    organisations = models.ManyToManyField('Organisation', blank=True)
    projects = models.ManyToManyField('Project', blank=True)

    # HAS social media


