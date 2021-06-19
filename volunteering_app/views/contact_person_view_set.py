from rest_framework import viewsets
from rest_framework.response import Response

from volunteering_app.models import ContactPerson
from volunteering_app.serialisers.contact_person_serialiser import ContactPersonSerialiser


class ContactPersonViewSet(viewsets.ModelViewSet):
    queryset = ContactPerson.objects.all()
    serializer_class = ContactPersonSerialiser

    def _get_object(self):
        id = self.kwargs['pk']
        return self.get_queryset().get(id=id)

    def list(self, request, **kwargs):
        serialiser = self.serializer_class(self.queryset, many=True, context={'request': request})
        return Response(serialiser.data)

    def retrieve(self, request, *args, **kwargs):
        instance = self._get_object()
        serialiser = self.serializer_class(instance, context={'request': request})
        return Response(serialiser.data)
