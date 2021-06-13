from django.db import models


class SocialMediaHandle(models.Model):
    # Enumeration class
    class SocialMediaName(models.TextChoices):
        FACEBOOK = 'Facebook'
        LINKEDIN = 'Linkedin'
        TWITTER = 'Twitter'
        INSTAGRAM = 'Instagram'

    name = models.CharField(choices=SocialMediaName.choices, max_length=255)
    link = models.URLField()
    owner = models.ForeignKey(None,on_delete=models.CASCADE())


class OrganisationSocialMediaHandle(SocialMediaHandle):
    owner = models.ForeignKey('Organisation', on_delete=models.CASCADE)


class VolunteerSocialMediaHandle(SocialMediaHandle):
    owner = models.ForeignKey('Volunteer', on_delete=models.CASCADE)


class ContactPersonSocialMediaHandle(SocialMediaHandle):
    owner = models.ForeignKey('ContactPerson', on_delete=models.CASCADE)


class ProjectSocialMediaHandle(SocialMediaHandle):
    owner = models.ForeignKey('Project', on_delete=models.CASCADE)


IMAGES = {
    SocialMediaHandle.SocialMediaName.TWITTER: 'images/social-media/twitter/Twitter logo/SVG/Logo blue.svg',
    SocialMediaHandle.SocialMediaName.FACEBOOK: 'images/social-media/facebook',
    SocialMediaHandle.SocialMediaName.INSTAGRAM: '',
    SocialMediaHandle.SocialMediaName.LINKEDIN: 'images/social-media/linkedin',
}
