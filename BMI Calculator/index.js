const heightEl = document.getElementById("height-value");
const weightEl = document.getElementById("weight-value");
const bmiEl = document.getElementById("bmi-value");
const btnEl = document.querySelector(".btn");
const bmiMeterEl = document.getElementById("bmi-meter")
let bmi = "";

btnEl.addEventListener("click", () => {
  if (!heightEl.value == "" && !weightEl.value == "") {
    const h = heightEl.value;
    const w = weightEl.value;
    bmi = ( ( w * 10000 ) / ( h * h ) ).toFixed(2);
    bmiEl.value = Number(bmi); 
    rangeCalculate();
  } else {
    heightEl.placeholder = "Enter Value Here";
    weightEl.placeholder = "Enter Value Here";
  }
})

function rangeCalculate() {
  if (bmi < 16) {
    bmiMeterEl.innerText = "Severe Thinness";
  } else if (bmi >= 16 && bmi < 17) {
    bmiMeterEl.innerText = "Moderate Thinness";
  } else if (bmi >= 17 && bmi < 18) {
    bmiMeterEl.innerText = "Mild Thinness";
  } else if (bmi >= 18 && bmi < 25) {
    bmiMeterEl.innerText = "Normal Weight";
    alert("Congratulation!");
  } else if (bmi >= 30 && bmi < 30) {
    bmiMeterEl.innerText = "Overweight";
  } else if (bmi >= 30 && bmi < 35) {
    bmiMeterEl.innerText = "Obese Class 1";
  } else if (bmi >= 35 && bmi < 40) {
    bmiMeterEl.innerText = "Obese Class 2";
  } else if (bmi >= 40 ) {
    bmiMeterEl.innerText = "Obese Class 3";
  }
}