const newYear = new Date("05-05-2025").getTime();
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds"); 

setInterval ( () => {
  calculateDate();
}, 1000);

function calculateDate() {
  const today = new Date().getTime();
  const remainingMilli = newYear - today;

  daysEl.innerText = Math.floor(remainingMilli / (1000 * 60 * 60 * 24));
  hoursEl.innerHTML = Math.floor((remainingMilli % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  minutesEl.innerHTML = Math.floor(remainingMilli % (1000 * 60 * 60) / (1000 * 60));
  secondsEl.innerHTML = Math.floor(remainingMilli % (1000 * 60) / (1000));
}