from django.shortcuts import render
import pyautogui
from orjson import loads


class Events:

    touch = []
    press = []
    click = []

    def do_touch(_: list):
        x, y = _[0]        
        if len(_):
            x, y = _[0]
            pyautogui.moveRel(x, 0)

            if (len(_) > 1):
                _ = _[1:]
                do_touch(_)


def kb(request):
    if request.method == "POST":

        ky = loads(request.body)["ky"]
        pyautogui.press(ky)

    return render(request, 'controler_app/controler_app.html', {})


TOUCH = []


def touchpad(request):

    if request.method == "POST":

        rqst = loads(request.body)
        x, y = rqst["x"], rqst["y"]

        # pyautogui.moveRel(x, y)
        Events.touch.append((x, y))
        Events.do_touch(Events.touch)

    return render(request, "controler_app/touchpad.html", {})


# INDXS = [
#     [0, -1],
#     [1, 0],
#     [0, 1],
#     [-1, 0],
# ]
#
#
# def touchpad(request):

#     if request.method == "POST":

#         rqst = loads(request.body)
#         indx = rqst["indx"]

#         x, y = INDXS[indx]

#         pyautogui.moveRel(x*10, y*10)

#     return render(request, "controler_app/touchpad.html", {})
