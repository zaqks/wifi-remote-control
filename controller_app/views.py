from django.shortcuts import render

def controller_app(request):
    return render(request, 'controller_app/controller_app.html')
