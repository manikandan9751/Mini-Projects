const navbar = document.querySelector(".navbar");
const linksEl = document.querySelectorAll(".links")
const scroll = 725;

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  scrollUpdate();
})

function scrollUpdate() {
  if (window.scrollY >= scroll) {
    navbar.classList.add("scroll");
    linksEl.forEach(element => {
      element.classList.add("scroll-text");
    });
  } else if (window.scrollY < scroll) {
    navbar.classList.remove("scroll");
    linksEl.forEach(element => {
      element.classList.remove("scroll-text");
    });
  } 
}