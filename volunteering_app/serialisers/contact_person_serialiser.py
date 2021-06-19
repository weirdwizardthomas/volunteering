from rest_framework import serializers

from volunteering_app.models import ContactPerson


class ContactPersonSerialiser(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = ContactPerson
        fields = ['id', 'name', 'email', 'phone_number', 'organisations', 'projects']
