const inputEl = document.getElementById("input");
const ageEl = document.getElementById("age");
const calculateBtn = document.getElementById("btn");

calculateBtn.addEventListener("click", () => {
  calculateAge();
});

function calculateAge() {
  const today = new Date().getFullYear();
  const bornDate = new Date(inputEl.value).getFullYear();
  const age = today - bornDate;

  if (isNaN(age)) {
    ageEl.innerText = 'Enter your age.';
  } else if (!isFinite(age)) {
    ageEl.innerText = 'Enter your age.';
  } else if (age == 0) {
    ageEl.innerText = 'Enter a valid date.';
  } else {
    ageEl.innerText = `Your are ${age} years old.`
  }
}
