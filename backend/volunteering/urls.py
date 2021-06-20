from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('volunteering/', include('volunteering_app.urls')),
]
