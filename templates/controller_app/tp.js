const touchpad = document.getElementById("touchpad");
let isDown = false;
let startX, startY;
let totalDeltaX = 0;
let totalDeltaY = 0;

function handleMove(clientX, clientY) {
  if (!isDown) return;
  const deltaX = clientX - startX;
  const deltaY = clientY - startY;
  // Accumulate the total movement
  totalDeltaX += deltaX;
  totalDeltaY += deltaY;
  // Update start position for next move
  startX = clientX;
  startY = clientY;
}

function resetMovement() {
  // Send the total movement, not just the direction
  if (totalDeltaX !== 0 || totalDeltaY !== 0) {
    sendTouch(totalDeltaX, totalDeltaY);
    // Reset the totals
    totalDeltaX = 0;
    totalDeltaY = 0;
  }
  isDown = false;
}

// Mouse events
touchpad.addEventListener("mousedown", (e) => {
  isDown = true;
  startX = e.clientX;
  startY = e.clientY;
  totalDeltaX = 0;
  totalDeltaY = 0;
});

touchpad.addEventListener("mousemove", (e) => {
  handleMove(e.clientX, e.clientY);
});

touchpad.addEventListener("mouseup", resetMovement);
touchpad.addEventListener("mouseleave", resetMovement);

// Touch events
touchpad.addEventListener(
  "touchstart",
  (e) => {
    const touch = e.touches[0];
    isDown = true;
    startX = touch.clientX;
    startY = touch.clientY;
    totalDeltaX = 0;
    totalDeltaY = 0;
  },
  { passive: false }
);

touchpad.addEventListener(
  "touchmove",
  (e) => {
    const touch = e.touches[0];
    handleMove(touch.clientX, touch.clientY);
    e.preventDefault();
  },
  { passive: false }
);

touchpad.addEventListener("touchend", resetMovement);
touchpad.addEventListener("touchcancel", resetMovement);

/////////////////////////////////////

const l = document.getElementById("l");
const r = document.getElementById("r");

// Track last click time and button
let lastClickTime = 0;
let lastClickButton = null;

function handleClick(buttonId, event) {
  const now = Date.now();
  const isDoubleClick =
    now - lastClickTime < 200 && lastClickButton === buttonId;
  lastClickTime = now;
  lastClickButton = buttonId;

  if (isDoubleClick) {
    sendClick(buttonId, true);
    // console.log(`Double-click on ${buttonId}`);
  } else {
    // Wait a bit to see if another click comes
    setTimeout(() => {
      // If no new click happened, it's a single click
      if (lastClickTime + 200 <= Date.now() || lastClickButton !== buttonId) {
        // console.log(`Single-click on ${buttonId}`);
        sendClick(buttonId, false);
      }
    }, 200);
  }
}

l.addEventListener("click", (e) => handleClick("l", e));
r.addEventListener("click", (e) => handleClick("r", e));
