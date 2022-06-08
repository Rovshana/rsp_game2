const userChoiceDisplay = document.createElement("h1");
const compChoiceDisplay = document.createElement("h1");
const displayResult = document.createElement("h1");
const game = document.getElementById("game");
game.append(userChoiceDisplay, compChoiceDisplay, displayResult);

const choices = ["rock", "paper", "scissors"];
let userChoice;
let compChoice;

// time to create brain of game, i mean functions )))
const handleClick = (e) => {
  userChoice = e.target.id;
  userChoiceDisplay.innerHTML = "userchoice:" + " " + userChoice;
  generateCompChoice();
  getResult();
};
// below function will show us comp choice;
const generateCompChoice = () => {
  const randomNum = choices[Math.floor(Math.random() * choices.length)];
  compChoice = randomNum;
  compChoiceDisplay.innerHTML = "computer-choice:" + " " + compChoice;
};

// time to  create our buttons
for (let i = 0; i < choices.length; i++) {
  const button = document.createElement("button");
  button.id = choices[i];
  button.innerHTML = choices[i];

  button.addEventListener("click", handleClick);
  game.appendChild(button);
}
// getting result
const getResult = () => {
  switch (userChoice + compChoice) {
    case "scissorspaper":
    case "rockscissors":
    case "paperrock":
      displayResult.innerHTML = "You Win!";
      break;
    case "paperscissors":
    case "scissorsrock":
    case "rockpaper":
      displayResult.innerHTML = "You Lost"
      break;
      case "paperpaper":
    case "rockrock":
    case "scissorsscissors":
      displayResult.innerHTML = "It's A DRAW!!!"
  }
};
