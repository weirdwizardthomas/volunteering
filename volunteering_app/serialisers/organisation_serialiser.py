from rest_framework import serializers

from volunteering_app.models import Organisation


class OrganisationSerialiser(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Organisation
        fields = ['id', 'name', 'description', 'date_created', 'contact_persons']
