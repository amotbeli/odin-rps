const choices = ["Rock", "Paper", "Scissors"];

let round = 0;
let totalHumanScore = 0;
let totalComputerScore = 0;

const resultBox = document.querySelector("div.result");
const scoreBox = document.querySelector("div.score");

function main() {
  setupEventListeners();
}

function setupEventListeners() {
  for (let i=0; i<choices.length; i++) {
    document.getElementById(choices[i].toLowerCase()).addEventListener("click", playGame);
  };
}

function playGame(e) {
  round += 1;

  if (round > 5) {
    return;
  }

  const humanChoice = e.target.id.charAt(0).toUpperCase() + e.target.id.substring(1);
  const humanPlay = document.body.querySelector("#human-play");
  humanPlay.textContent = `You played ${humanChoice}`;

  const computerChoice = getComputerChoice();
  const computerPlay = document.body.querySelector("#computer-play");
  computerPlay.textContent= `Computer plays ${computerChoice}`;

  const result = document.body.querySelector("#result");
  result.textContent = getResult(humanChoice, computerChoice);

  const scores = assignScores(result.textContent);

  const roundScores = document.body.querySelector("#round-score");
  roundScores.textContent = `Round:${round} Score: Human - ${scores[0]}, Computer - ${scores[1]}`;

  const currentScores = document.body.querySelector("#current-score");
  currentScores.textContent = `Running Score: Human - ${scores[2]}, Computer - ${scores[3]}`;

  if (round == 5) {
    const finalScores = document.body.querySelector("#final-score");
    let finalResult = "";

    if (scores[2] > scores[3]) {
      finalResult = `Congratulations! You won!`;
      document.body.querySelector(".score").setAttribute("style", "background-color: green;");
    }
    else if (scores[2] < scores[3]) {
      finalResult = `You lost! Try again.`;
      document.body.querySelector(".score").setAttribute("style", "background-color: red;");
    }
    else {
      finalResult = `It is a tie! Try again.`;
      document.body.querySelector(".score").setAttribute("style", "background-color: gray;");
    }
    currentScores.textContent = `Final Score: Human - ${scores[2]}, Computer - ${scores[3]}`;
    finalScores.textContent = finalResult;
  }
};

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * 3);
  const computerChoice = choices[randomIndex];
  return computerChoice;
}

function getResult(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    result = `You both played ${humanChoice}.`;
    return `${result} It's a tie!`;
  }
  else if (humanChoice == "Rock" && computerChoice == "Scissors" || humanChoice == "Paper" && computerChoice == "Rock" || humanChoice == "Scissors" && computerChoice == "Paper") {
    result = `${humanChoice} beats ${computerChoice}!`;
    return `You win! ${result}`;
  }
  else {
    result = `${computerChoice} beats ${humanChoice}!`;
    return `Computer wins! ${result}`;
  }
}

function assignScores(result) {
  let humanScore = 0;
  let computerScore = 0;

  if (result.includes("You win!")) {
    humanScore += 1;
    totalHumanScore += humanScore;
  }
  else if (result.includes("Computer wins!")) {
    computerScore += 1;
    totalComputerScore += computerScore;
  }
  return [humanScore, computerScore, totalHumanScore, totalComputerScore];
}

main();