from channels.generic.websocket import AsyncWebsocketConsumer
import json
import pyautogui


class KbConsumer(AsyncWebsocketConsumer):
    async def receive(self, text_data):
        data = json.loads(text_data)
        key = data.get('ky')
        action = data.get('action')  # 'down' or 'up'

        print(key, action)

        if not key or not action:
            return

        try:
            if key in pyautogui.KEYBOARD_KEYS:
                if action == 'down':
                    pyautogui.keyDown(key)
                elif action == 'up':
                    pyautogui.keyUp(key)

            else:
                if action == 'down':
                    pyautogui.typewrite(key)

        except Exception as e:
            print(f"Error handling key {key} action {action}: {e}")


class TpConsumer(AsyncWebsocketConsumer):
    async def receive(self, text_data):
        data = json.loads(text_data)
        x, y, b, d = data.get('x'), data.get(
            'y'), data.get('b'),  data.get('d')

        if b == None:
            pyautogui.move(x, y)
        else:
            if b == 'r':
                pyautogui.rightClick()
            else:
                pyautogui.doubleClick() if d else pyautogui.click()
