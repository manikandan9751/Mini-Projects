const imgEl = document.getElementById("img");



window.addEventListener("scroll", () => {
  const scroll = 1 - ( window.scrollY / 900);
  imgEl.style.opacity = `${scroll}`;
  imgEl.style.transform = `scale(${100 + ( window.scrollY / 10 )}%)`;
})