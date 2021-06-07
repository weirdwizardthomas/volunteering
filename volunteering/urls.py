from django.contrib import admin
from django.urls import path

from volunteering_app import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index.Index.as_view(), name='index'),
    path('organisations/', views.organisation_list_view.OrganisationListView.as_view()),
    path('volunteers/', views.volunteer_list_view.VolunteerListView.as_view()),
    path('volunteer/<int:pk>/', views.volunteer_view.VolunteerView.as_view(), name='volunteer'),
    path('projects/', views.project_list_view.ProjectListView.as_view()),
]
