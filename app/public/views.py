from django.shortcuts import render
from .actions.home import get_context as get_home_context
from liveview.utils import get_html

async def home(request):
    return render(request, "layouts/base.html", await get_home_context())
