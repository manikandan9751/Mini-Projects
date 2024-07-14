const searchBarContainerEl = document.querySelector(".search-bar-container");
const searchIconEl = document.querySelector(".search-icon");

searchIconEl.addEventListener("click", () => {
  displayInput();
})

function displayInput() {
  searchBarContainerEl.classList.toggle("active");
}

function removeInput() {
  searchBarContainerEl.classList.add("active");
}