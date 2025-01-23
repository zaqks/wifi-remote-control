from django.shortcuts import render
import pyautogui
from orjson import loads


def kb(request):
    if request.method == "POST":
        ky = loads(request.body)["ky"]
        pyautogui.press(ky)

    return render(request, 'controler_app/controler_app.html', {})


def touchpad(request):

    if request.method == "POST":
        rqst = loads(request.body)
        x, y = rqst["x"], rqst["y"]

        pyautogui.moveRel(x, y)

    return render(request, "controler_app/touchpad.html", {})
