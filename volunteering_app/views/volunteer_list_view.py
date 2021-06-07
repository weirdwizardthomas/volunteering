from django.http import HttpResponse
from django.views.generic import ListView

from volunteering_app.models import Volunteer


class VolunteerListView(ListView):
    template_name = 'volunteering_app/volunteer_list.html'

    queryset = Volunteer.objects.all()
    volunteers_list = queryset

    context_object_name = 'volunteers_list'
