const today = new Date();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let monthName = months[today.getMonth()];
const dayName = days[today.getDay()];
const dayNumber = today.getDate();
const year = today.getFullYear();

document.querySelector('.month-name').innerHTML = monthName;
document.querySelector('.day-name').innerHTML = dayName;
document.querySelector('.day-number').innerHTML = dayNumber;
document.querySelector('.year').innerHTML = year;