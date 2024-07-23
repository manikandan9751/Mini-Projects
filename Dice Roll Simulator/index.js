const mainImgEl = document.getElementById("main-img");
const resultImgEl = document.getElementById("result-img");
const btnEl = document.getElementById("btn");
const resultEl = document.getElementById("result-container");

let rollNum = 0;

btnEl.addEventListener("click", () => {
  mainImgEl.classList.add("rolling");
  setTimeout(() => {
    mainImgEl.classList.remove("rolling")
  }, 1000);
  setTimeout(() => {
    calculateResult();
  }, 1000)
})

function calculateResult() {
  rollNum = rollNum + 1;
  const imgNum = Math.floor( Math.random() * 5 ) + 1;
  const addResult = `
    <div class="result">
      <p>Roll ${rollNum}:</p>
      <img src="./Images/dice-six-faces-${imgNum}.png" class="result-img" id="result-img">
    </div>
  `;
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = addResult;
  const newResult = tempDiv.firstElementChild;
  resultEl.appendChild(newResult);
  mainImgEl.src = `./Images/dice-six-faces-${imgNum}.png`;
}