const containerEl = document.querySelector(".container");
const career = ["Youtuber", "Web Developer", "Freelancer", "Hacker"];
let careerIndex = 0;
let characterIndex = 0;

updateText();


function updateText() {
  characterIndex++;
  containerEl.innerHTML = `<h1>I am ${career[careerIndex].slice(0,1) === "H" ? "an" : "a"} ${career[careerIndex].slice(0,characterIndex)}</h1>`;
  if (characterIndex === career[careerIndex].length) {
    careerIndex++;
    characterIndex = 0;
  }

  if (careerIndex === career.lenght) {
    careerIndex = 0;
  }
  setTimeout(updateText, 200);
}
