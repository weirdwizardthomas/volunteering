from rest_framework import serializers

from volunteering_app.models import Project


class ProjectSerialiser(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Project
        fields = ['id', 'name', 'owner', 'status', 'date_created', 'contact_persons', 'volunteers']
