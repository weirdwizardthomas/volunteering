from django.contrib import admin

# Register your models here.
from .models import *

admin.site.register(Project)
admin.site.register(Organisation)
admin.site.register(Skill)
admin.site.register(Volunteer)
