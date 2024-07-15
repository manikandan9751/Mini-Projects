const loanAmountEl = document.getElementById("loan-amount");
const interestRateEl = document.getElementById("interest-rate");
const monthsPayEl = document.getElementById("months-pay");
const paymentEl = document.getElementById("payment");
const calBtnEl = document.getElementById("cal");
const reBtnEl = document.getElementById("re");

calBtnEl.addEventListener("click", () => {
  if (isNaN(paymentEl)) {
    paymentEl.innerText = "Not a Valid Input";
  } else if (!isFinite(paymentEl)) {
    paymentEl.innerText = "Not a Valid Input";
  } else {
    if (loanAmountEl.value.trim() !== '' && interestRateEl.value.trim() !== '' && monthsPayEl.value.trim() !== '') {
      calculateLoan();
    } else {
      loanAmountEl.setAttribute("placeholder", "Enter Loan Amount"); 
      interestRateEl.setAttribute("placeholder", "Enter Interest Rate");
      monthsPayEl.setAttribute("placeholder", "Enter Months");
    }
  }
});

reBtnEl.addEventListener("click", () => {
  loanAmountEl.value = '' ; 
  interestRateEl.value = '' ;
  monthsPayEl.value = '' ;
  paymentEl.value = '' ;

  loanAmountEl.setAttribute("placeholder", ""); 
  interestRateEl.setAttribute("placeholder", "");
  monthsPayEl.setAttribute("placeholder", "");
})

function calculateLoan() {
  const lA = loanAmountEl.value;
  const iR = (interestRateEl.value / 12)/100;
  const mP = monthsPayEl.value;
  const numer = (lA * iR) * ( ( 1 + iR ) ** mP );
  const denom = ( ( 1 + iR ) ** mP ) - 1 ;
  const pM = ( numer / denom ).toFixed(2);

  paymentEl.innerText = pM;
}