from django.db import models


class SocialMediaName(models.TextChoices):
    FACEBOOK = 'Facebook'
    LINKEDIN = 'Linkedin'
    TWITTER = 'Twitter'
    INSTAGRAM = 'Instagram'


class OrganisationSocialMediaHandle(models.Model):
    name = models.CharField(choices=SocialMediaName.choices, max_length=255)
    link = models.URLField()
    owner = models.ForeignKey('Organisation', on_delete=models.CASCADE)


class VolunteerSocialMediaHandle(models.Model):
    name = models.CharField(choices=SocialMediaName.choices, max_length=255)
    link = models.URLField()
    owner = models.ForeignKey('Volunteer', on_delete=models.CASCADE)


class ContactPersonSocialMediaHandle(models.Model):
    name = models.CharField(choices=SocialMediaName.choices, max_length=255)
    link = models.URLField()
    owner = models.ForeignKey('ContactPerson', on_delete=models.CASCADE)


class ProjectSocialMediaHandle(models.Model):
    name = models.CharField(choices=SocialMediaName.choices, max_length=255)
    link = models.URLField()
    owner = models.ForeignKey('Project', on_delete=models.CASCADE)


IMAGES = {
    SocialMediaName.TWITTER: 'images/social-media/twitter/Twitter logo/SVG/Logo blue.svg',
    SocialMediaName.FACEBOOK: 'images/social-media/facebook',
    SocialMediaName.INSTAGRAM: '',
    SocialMediaName.LINKEDIN: 'images/social-media/linkedin',
}
