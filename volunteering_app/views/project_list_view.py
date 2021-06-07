from django.views.generic import ListView

from volunteering_app.models import Project


class ProjectListView(ListView):
    template_name = 'volunteering_app/project_list.html'

    queryset = Project.objects.all()
    volunteers_list = queryset

    context_object_name = 'project_list'
