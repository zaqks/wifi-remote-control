from django.shortcuts import render

def controler_app(request):
	return render(request, 'controler_app/controler_app.html', {})

