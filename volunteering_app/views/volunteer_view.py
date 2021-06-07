from django.shortcuts import get_object_or_404
from django.views.generic import TemplateView

from volunteering_app.models import Volunteer


class VolunteerView(TemplateView):
    template_name = 'volunteering_app/volunteer.html'

    def get_queryset(self):
        self.volunteer = get_object_or_404(Volunteer, pk=pk)
