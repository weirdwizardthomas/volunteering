from django.views.generic import TemplateView


class Index(TemplateView):
    template_name = 'volunteering_app/index.html'
