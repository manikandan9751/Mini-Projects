const frontBarEl = document.getElementById("front-bar");
const counterEl = document.getElementById("counter");
let width = 0;

loading();

function loading() {
  let count = 0;
  const maxCount = 100;

  const setIntervalId = setInterval(() => {
    frontBarEl.style.width = `${count}%`;
    counterEl.innerText = `${count}%`;
    count++;
    if (count > maxCount) {
      clearInterval(setIntervalId);
    }
  }, 20);
}