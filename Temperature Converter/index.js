const celsiusEl = document.querySelector(".celsiusI");
const fahrenheitEl = document.querySelector(".fahrenheitI");
const kelvinEl = document.querySelector(".kelvinI");
const calculateBtn = document.getElementById("calculate")
const resetBtn = document.getElementById("reset")


celsiusEl.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    calculateFahrenheit();
    calculateKelvin();
  }
})

fahrenheitEl.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    calculateCelsius();
    calculateKelvin();
  }
})

kelvinEl.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    celsiusFromKelvin();
    calculateFahrenheit();
  }
})


function calculateCelsius() {
  celsiusEl.value = ( ( 5 / 9 ) * ( fahrenheitEl.value - 32) ).toFixed(2);
}

function calculateFahrenheit() {
  fahrenheitEl.value = ( ( ( 9 / 5 ) * celsiusEl.value ) + 32 ).toFixed(2);
}

function calculateKelvin() {
  kelvinEl.value = ( Number(celsiusEl.value) + 273.15 ).toFixed(2);
}

function celsiusFromKelvin() {
  celsiusEl.value = ( kelvinEl.value - 273.15 ).toFixed(2);
}