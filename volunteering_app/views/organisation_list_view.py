from django.http import HttpResponse
from django.views.generic import ListView

from volunteering_app.models import Organisation


class OrganisationListView(ListView):
    template_name = 'volunteering_app/organisation_list.html'

    queryset = Organisation.objects.all()

    organisations_list = queryset
    context_object_name = 'organisation_list'
