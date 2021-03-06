const imgEl = document.querySelector("#ali-img");

function rotateImg(e) {
  let mouseX, mouseY;

  if (e.targetTouches && e.targetTouches[0]) {
    e = e.targetTouches[0];
    mouseX = e.pageX;
    mouseY = e.pageY;
  } else {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }

  const imgElBox = imgEl.getBoundingClientRect();
  const centerX = imgElBox.left + imgElBox.width / 2 - window.pageXOffset;
  const centerY = imgElBox.top + imgElBox.height / 2 - window.pageYOffset;

  const radians = Math.atan2(mouseX - centerX, mouseY - centerY);
  const degrees = radians * (180 / Math.PI) * -1 + -90;

  imgEl.style.transform = "rotate(" + degrees + "deg)";
}

window.addEventListener("mousemove", rotateImg);
window.addEventListener("touchmove", rotateImg);
window.addEventListener("touchstart", rotateImg);
