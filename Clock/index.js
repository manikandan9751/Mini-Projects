const hoursHand = document.querySelector(".hours");
const minutesHand = document.querySelector(".minutes");
const secondsHand = document.querySelector(".seconds");

setInterval(updateTime, 1000)

function updateTime() {
  const h = ( new Date().getHours() * 30 ) + "deg";
  const m = ( new Date().getMinutes() * 6 ) + "deg";
  const s = ( new Date().getSeconds() * 6 ) + "deg";

  hoursHand.style.transform = `rotate(${h})`;
  minutesHand.style.transform = `rotate(${m})`;
  secondsHand.style.transform = `rotate(${s})`;
}