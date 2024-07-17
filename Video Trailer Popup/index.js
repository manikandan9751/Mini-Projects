const conatinerEl = document.querySelector(".container");
const btnEl = document.getElementById("btn");
const trailerEl = document.querySelector(".trailer-container");
const closeEl = document.querySelector(".fas");
const videEl = document.getElementById("video");

btnEl.addEventListener("click", () => {
  if (trailerEl.style.display === "none") {
    trailerEl.style.display = "block";
    conatinerEl.style.display = "none";
  } else {
    trailerEl.style.display = "none";
  }
  video.play();
});

closeEl.addEventListener("click", () => {
  trailerEl.style.display = "none";
  conatinerEl.style.display = "block";
  video.pause();
});