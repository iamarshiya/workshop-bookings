# Django Imports
from django.shortcuts import redirect
from django.urls import reverse
from django.conf import settings

# Local Imports
from cms.models import Page


def index(request):
    """Serve the React Frontend for the root URL"""
    from workshop_app.views import index as app_index
    return app_index(request)
