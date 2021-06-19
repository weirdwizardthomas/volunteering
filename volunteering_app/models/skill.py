from django.db import models

STR_TEMPLATE = '{name}'


class Skill(models.Model):
    class SkillName(models.TextChoices):
        WEB_DESIGN = 'Web design'
        COOKING = 'Cooking'
        GARDENING = 'Gardening'
        LITTER_PICKING = 'Litter picking'

    name = models.CharField(choices=SkillName.choices, max_length=255)

    def __str__(self):
        return STR_TEMPLATE.format(name=self.name)
