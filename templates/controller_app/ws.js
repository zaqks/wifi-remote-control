//
const kbSocket = new WebSocket(
  (window.location.protocol === "https:" ? "wss://" : "ws://") +
    window.location.host +
    "/ws/kb/"
);

kbSocket.onopen = () => console.log("WebSocket connected");
kbSocket.onerror = (e) => console.error("WebSocket error:", e);
kbSocket.onclose = () => console.log("WebSocket closed");

const keysPressed = {};

function sendKeyDown(k) {
  if (!keysPressed[k]) {
    keysPressed[k] = true;
    kbSocket.send(JSON.stringify({ ky: k, action: "down" }));
  }
}

function sendKeyUp(k) {
  if (keysPressed[k]) {
    keysPressed[k] = false;
    kbSocket.send(JSON.stringify({ ky: k, action: "up" }));
  }
}

//////////////////////////////////////////////////////////////////////
const tpSocket = new WebSocket(
  (window.location.protocol === "https:" ? "wss://" : "ws://") +
    window.location.host +
    "/ws/tp/"
);

tpSocket.onopen = () => console.log("WebSocket connected");
tpSocket.onerror = (e) => console.error("WebSocket error:", e);
tpSocket.onclose = () => console.log("WebSocket closed");

function sendTouch(x, y) {
  tpSocket.send(JSON.stringify({ x: x, y: y, b: null, d: null }));
}

function sendClick(b, d) {
  tpSocket.send(JSON.stringify({ x: null, y: null, b: b, d: d }));
}
