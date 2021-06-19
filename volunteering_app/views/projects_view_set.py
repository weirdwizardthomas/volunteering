from rest_framework import viewsets
from rest_framework.response import Response

from volunteering_app.models import Project
from volunteering_app.serialisers.project_serialiser import ProjectSerialiser


class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerialiser

    def _get_object(self):
        id = self.kwargs['pk']
        return self.get_queryset().get(id=id)

    def list(self, request, **kwargs):
        serialiser = self.serializer_class(self.queryset, many=True)
        return Response(serialiser.data)

    def retrieve(self, request, *args, **kwargs):
        instance = self._get_object()
        serialiser = self.serializer_class(instance)
        return Response(serialiser.data)
