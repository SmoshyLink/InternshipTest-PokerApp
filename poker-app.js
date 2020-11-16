const btnNext = document.querySelector("#arrow-next");
const btnPrev = document.querySelector("#arrow-prev");
const currentPlayer = document.querySelector("#current-player");
const popupDiv = document.querySelector("#popupDiv");

let popup = document.createElement("div");
popup.setAttribute("id", "popup");

let popupBtn = document.createElement("BUTTON");
popupBtn.setAttribute("id", "popup-btn");
popupBtn.innerHTML = "OK";

let popupTxt = document.createElement("P");
popupTxt.setAttribute("id", "popup-txt");

let highlightAvatar = document.createElement("div");
highlightAvatar.setAttribute("id", "highlight-avatar");

let highlightName = document.createElement("div");
highlightName.setAttribute("id", "highlight-name");

document.getElementById("highlight").appendChild(highlightAvatar);
document.getElementById("highlight").appendChild(highlightName);

highlightAvatar.style.top = "13.9rem";
highlightAvatar.style.left = "6.5rem";

highlightName.style.top = "17.1rem";
highlightName.style.left = "6.51rem";

const highlightAvatarTops = ["13.9rem", "3.75rem", "3.6rem", "14.4rem"];
const highlightNameTops = ["17.1rem", "6.75rem", "6.8rem", "17.6rem"];
const highlightLefts = ["6.5rem", "7.05rem", "41rem", "41.5rem"];

const playerText = ["P1", "P2", "P3", "P4"];
currentPlayer.textContent = "P1 turn";
let index = 0;

function changeHighlight() {
  highlightAvatar.style.top = highlightAvatarTops[index];
  highlightAvatar.style.left = highlightLefts[index];

  highlightName.style.top = highlightNameTops[index];
  highlightName.style.left = highlightLefts[index];
}

btnNext.addEventListener("click", () => {
  index++;
  if (index == 4) index = 0;
  currentPlayer.textContent = playerText[index] + " turn";
  changeHighlight();
});

btnPrev.addEventListener("click", () => {
  index--;
  if (index == -1) index = 3;
  currentPlayer.textContent = playerText[index] + " turn";
  changeHighlight();
});

function playerClicked(playerName) {
  popupTxt.innerHTML = playerName;

  document.getElementById("popupDiv").appendChild(popup);
  document.getElementById("popup").appendChild(popupTxt);
  document.getElementById("popup").appendChild(popupBtn);
}

player1.addEventListener("click", function () {
  playerClicked("P1");
});

player2.addEventListener("click", function () {
  playerClicked("P2");
});

player3.addEventListener("click", function () {
  playerClicked("P3");
});

player4.addEventListener("click", function () {
  playerClicked("P4");
});

popupBtn.addEventListener("click", () => {
  let popupDiv = document.getElementById("popup");
  popupDiv.remove();
});
