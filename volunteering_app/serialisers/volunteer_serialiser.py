from rest_framework import serializers

from volunteering_app.models import Volunteer


class VolunteerSerialiser(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Volunteer
        fields = ['name', 'email', 'date_created', 'id']
