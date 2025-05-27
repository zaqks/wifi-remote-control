from django.http import FileResponse, Http404
from django.conf import settings
import os

async def media_server(request, path):
    got = None

    for static_dir in settings.STATICFILES_DIRS:
        file_path = os.path.join(static_dir, path)
        if os.path.exists(file_path):
            got = open(file_path, "rb")
            break

    if not got:
        raise Http404("Non existing file")

    return FileResponse(got)
