from django.db import models


class Skill(models.Model):
    class SkillName(models.TextChoices):
        WEB_DESIGN = 'Web design'
        COOKING = 'Cooking'
        GARDENING = 'Gardening'
        LITTER_PICKING = 'Litter picking'

    name = models.CharField(choices=SkillName.choices, max_length=255)
