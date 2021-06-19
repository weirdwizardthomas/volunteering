from django.db import models

DEFAULT_VOLUNTEER_PICTURE = 'images/profile_default_picture.png'
STR_TEMPLATE = '{name} | id: {id}'


class Volunteer(models.Model):
    date_created = models.DateTimeField(auto_now_add=True)

    name = models.CharField(max_length=255)
    email = models.EmailField()

    projects = models.ManyToManyField('Project', blank=True)
    skills = models.ManyToManyField('Skill', blank=True)

    # HAS social_media
    # image = models.ImageField(default=DEFAULT_VOLUNTEER_PICTURE)

    def __str__(self):
        return STR_TEMPLATE.format(name=self.name, id=self.id)
