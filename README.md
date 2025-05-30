<img width='100%' src='https://github.com/zaqks/wifi-remote-control/blob/fd21623f6e5a98742f59fdb03fba72c034a4797f/docs/Screenshot_20250527_060139.png'>

# Virtual Keyboard & Touchpad Controller

A web-based virtual keyboard and touchpad that lets you control your PC remotely using your phone. Built with Django (backend), WebSocket for real-time communication, and vanilla JavaScript (frontend). Works over the internet if hosted, for example, via SSH tunneling.

---

## ✨ Features

- **Virtual Keyboard:** Minimal keyboard layout with multi-key and touch support.
- **Touchpad:** Swipe and tap gestures to control the mouse cursor.
- **Remote Control:** Use your phone as a controller for your PC.
- **Real-Time:** WebSocket enables instant key and mouse events.
- **Cross-Platform:** Works on any device with a modern browser.
- **Host Anywhere:** Deploy on your own server or use over SSH.

---

## 🛠️ Tech Stack

- **Backend:** Django (Python)
- **Frontend:** Vanilla JavaScript
- **Communication:** WebSocket
- **Deployment:** Anywhere (local, cloud, SSH tunnel, etc.)

---


## How to Run

Simply run the `runserver.py` script and open your phone's browser on your local IP port 8000 (you can check your local IP by using `ip addr` on linux, the samething is possible on windows but with a different command)
