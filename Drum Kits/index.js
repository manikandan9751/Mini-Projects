const crashEl = document.querySelector(".crash");
const kickEl = document.querySelector(".kick");
const snareEl = document.querySelector(".snare");
const tomEl = document.querySelector(".tom");

const audio1 = document.getElementById("audio1");
const audio2 = document.getElementById("audio2");
const audio3 = document.getElementById("audio3");
const audio4 = document.getElementById("audio4");


crashEl.addEventListener("click", () => {
  clickCrash();
});

kickEl.addEventListener("click", () => {
  clickKick();
});

snareEl.addEventListener("click", () => {
  clickSnare();
});

tomEl.addEventListener("click", () => {
  clickTom();
});


function handleKey() {
    clickCrash();
}

function clickCrash() {
  crashEl.classList.add("vibrating");
  setTimeout(() => {
    crashEl.classList.remove("vibrating");
  }, 1000);
  if (!audio1.paused) {
    audio1.pause();
    audio1.currentTime = 0;
  } else {
    audio2.pause();
    audio3.pause();
    audio4.pause();
    audio1.play();
  }
}

function clickKick() {
  kickEl.classList.add("vibrating");
  setTimeout(() => {
    kickEl.classList.remove("vibrating");
  }, 1000);
  if (!audio2.paused) {
    audio2.pause();
  } else {
    audio1.pause();
    audio3.pause();
    audio4.pause();
    audio2.play();
  }
}

function clickSnare() {
  snareEl.classList.add("vibrating");
  setTimeout(() => {
    snareEl.classList.remove("vibrating");
  }, 1000);
  if (!audio3.paused) {
    audio3.pause();
  } else {
    audio2.pause();
    audio1.pause();
    audio4.pause();
    audio3.play();
  }
}

function clickTom() {
  tomEl.classList.add("vibrating");
  setTimeout(() => {
    tomEl.classList.remove("vibrating");
}, 1000);
  if (!audio4.paused) {
    audio4.pause();
  } else {
    audio2.pause();
    audio3.pause();
    audio1.pause();
    audio4.play();
  }
}