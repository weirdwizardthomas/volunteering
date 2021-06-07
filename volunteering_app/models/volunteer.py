from django.db import models


class Volunteer(models.Model):
    date_created = models.DateTimeField(auto_now_add=True)

    name = models.CharField(max_length=255)
    email = models.EmailField()
    image = models.ImageField(default='images/profile_default_picture.png')

    projects = models.ManyToManyField('Project')
    skills = models.ManyToManyField('Skill')
