from django.conf import settings
from django.shortcuts import render
from .actions.home import get_context as get_home_context

async def home(request):
    return render(request, settings.TEMPLATE_BASE, await get_home_context())
