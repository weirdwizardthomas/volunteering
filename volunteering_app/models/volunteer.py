from django.db import models

DEFAULT_VOLUNTEER_PICTURE = 'images/profile_default_picture.png'


class Volunteer(models.Model):
    date_created = models.DateTimeField(auto_now_add=True)

    name = models.CharField(max_length=255)
    email = models.EmailField()
    image = models.ImageField(default=DEFAULT_VOLUNTEER_PICTURE)

    projects = models.ManyToManyField('Project')
    skills = models.ManyToManyField('Skill')

    # HAS social_media
