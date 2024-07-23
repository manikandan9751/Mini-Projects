const btnEl = document.getElementById("btn");
const emojiNameEl = document.getElementById("emoji-name");

const emoji = [];

getEmoji();

btnEl.addEventListener("click", () => {
  const randomNum = Math.floor( Math.random() * emoji.length );
  btnEl.innerText = emoji[randomNum].emojiName;
  emojiNameEl.innerText = emoji[randomNum].emojiCode;
})


async function getEmoji() {
  let response = await fetch("https://emoji-api.com/emojis?access_key=18d46cac22f9df869212b86c4e6bce573a2cc959");
  const data = await response.json();

  for (let index = 0; index < 1500; index++) {
    emoji.push({
      emojiName: data[index].character,
      emojiCode: data[index].unicodeName
    })
  }
}