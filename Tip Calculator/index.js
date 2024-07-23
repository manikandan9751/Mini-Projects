const billEl = document.getElementById("bill-amount");
const tipEl = document.getElementById("tip-percent");
const btnEl = document.getElementById("btn");
const totalEl = document.getElementById("total")

btnEl.addEventListener("click", () => {
  if (billEl.value.trim() != "" && tipEl.value.trim() != "") {
    calculateTip(); 
  } else {
    billEl.setAttribute("placeholder", "Enter Amount")
    tipEl.setAttribute("placeholder", "Enter Percentage")
  }
})

function calculateTip() {
  const bill = billEl.value;
  const tip = ( tipEl.value / 100 ).toFixed(2);
  const total = ( bill * tip ).toFixed(2);
  totalEl.innerText = `$${total}`;
}