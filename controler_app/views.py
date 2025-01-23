from django.shortcuts import render
import pyautogui
from orjson import loads

def controler_app(request):
    if request.method == "POST":
        ky = loads(request.body)["ky"]
        pyautogui.press(ky)

    return render(request, 'controler_app/controler_app.html', {})
