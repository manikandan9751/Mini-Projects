const xPosEl = document.getElementById("xpos");
const yPosEl = document.getElementById("ypos");


window.addEventListener("mousemove", (event) => {
  const xPos = event.pageX;
  const yPos = event.pageY;

  xPosEl.innerText = xPos;
  yPosEl.innerText = yPos;
})