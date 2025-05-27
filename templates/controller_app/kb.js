const SPLIT_RATIO = 0.55;

function buildKeyboard() {
  renderLeft();
  renderRight();
}

function renderLeft() {
  const KB = document.getElementById("left");
  KB.innerHTML = "";

  for (let rowIndex in KEYS) {
    const rw = document.createElement("div");
    rw.classList.add("rw");
    rw.id = `rw_${rowIndex}_left`;

    const splitPoint = Math.floor(KEYS[rowIndex].length * SPLIT_RATIO);
    for (let kIndex = 0; kIndex < splitPoint; kIndex++) {
      const k = KEYS[rowIndex][kIndex];
      const ky = document.createElement("div");
      ky.classList.add("ky");
      ky.id = `ky_${k[0]}_left`;
      ky.innerText = k[0];
      ky.style.aspectRatio = k[1];
      ky.style.userSelect = "none";

      // Mouse events
      ky.addEventListener("mousedown", () => sendKeyDown(k[2]));
      ky.addEventListener("mouseup", () => sendKeyUp(k[2]));
      ky.addEventListener("mouseleave", () => sendKeyUp(k[2]));

      // Touch events
      ky.addEventListener("touchstart", (e) => {
        e.preventDefault();
        sendKeyDown(k[2]);
      }, { passive: false });
      ky.addEventListener("touchend", (e) => {
        e.preventDefault();
        sendKeyUp(k[2]);
      }, { passive: false });
      ky.addEventListener("touchcancel", (e) => {
        e.preventDefault();
        sendKeyUp(k[2]);
      }, { passive: false });

      rw.appendChild(ky);
    }
    KB.appendChild(rw);
  }
}

function renderRight() {
  const KB = document.getElementById("right");
  KB.innerHTML = "";

  for (let rowIndex in KEYS) {
    const rw = document.createElement("div");
    rw.classList.add("rw");
    rw.id = `rw_${rowIndex}_right`;

    const splitPoint = Math.floor(KEYS[rowIndex].length * SPLIT_RATIO);
    for (let kIndex = splitPoint; kIndex < KEYS[rowIndex].length; kIndex++) {
      const k = KEYS[rowIndex][kIndex];
      const ky = document.createElement("div");
      ky.classList.add("ky");
      ky.id = `ky_${k[0]}_right`;
      ky.innerText = k[0];
      ky.style.aspectRatio = k[1];
      ky.style.userSelect = "none";

      // Mouse events
      ky.addEventListener("mousedown", () => sendKeyDown(k[2]));
      ky.addEventListener("mouseup", () => sendKeyUp(k[2]));
      ky.addEventListener("mouseleave", () => sendKeyUp(k[2]));

      // Touch events
      ky.addEventListener("touchstart", (e) => {
        e.preventDefault();
        sendKeyDown(k[2]);
      }, { passive: false });
      ky.addEventListener("touchend", (e) => {
        e.preventDefault();
        sendKeyUp(k[2]);
      }, { passive: false });
      ky.addEventListener("touchcancel", (e) => {
        e.preventDefault();
        sendKeyUp(k[2]);
      }, { passive: false });

      rw.appendChild(ky);
    }
    KB.appendChild(rw);
  }
}


