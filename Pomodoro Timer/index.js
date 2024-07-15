const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const startBtnEl = document.getElementById("start");
const stopBtnEl = document.getElementById("stop");
const resetBtnEl = document.getElementById("reset");
let timer;

let pomodoroTime = 25 * 60;

startBtnEl.addEventListener("click", () => {
  timer = setInterval ( () => {
    updateTimer();
  }, 1000);
});

stopBtnEl.addEventListener("click", () => {
  clearInterval(timer);
});

resetBtnEl.addEventListener("click", () => {
  clearInterval(timer);
  pomodoroTime = 25 * 60;
  updateTimer();
});

function updateTimer() {
  const m = Math.floor(pomodoroTime / 60);
  const s = Math.floor(pomodoroTime % 60);
  minutesEl.innerText = String(m).padStart(2, '0');
  secondsEl.innerText = String(s).padStart(2, '0');

  pomodoroTime --;
}