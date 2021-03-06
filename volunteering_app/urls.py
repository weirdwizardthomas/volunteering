from django.urls import path, include

from . import views, routers

router = routers.CustomRouter().register_multiple({'volunteers': views.VolunteersViewSet,
                                                   'projects': views.ProjectsViewSet,
                                                   'organisations': views.OrganisationsViewSet, })

urlpatterns = [
    path('', include(router.urls)),
    # path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
