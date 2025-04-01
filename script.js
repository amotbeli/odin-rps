let computerChoice = getComputerChoice();

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

let humanChoice = getHumanChoice();

let computerScore = 0;
let humanScore = 0;

function getHumanChoice() {
  return prompt("Enter your choice ('rock', 'paper', 'scissors')").toLowerCase();
}

function playRound(computerChoice, humanChoice) {
  console.log(`You played: ${humanChoice}`);
  console.log(`Computer played: ${computerChoice}`);

  if (humanChoice == "rock") {
    if (computerChoice == "paper") {
      console.log("You lose! Paper beats Rock.");
      computerScore += 1;
    }
    else if (computerChoice == "scissors") {
      console.log("You win! Rock beats Scissors.");
      humanScore += 1;
    }
    else {
      console.log("It's a tie! You both played Rock.");
    }
  }
  else if (humanChoice == "paper") {
    if (computerChoice == "scissors") {
      console.log("You lose! Scissors beat Paper.");
      computerScore += 1;
    }
    else if (computerChoice == "rock") {
      console.log("You win! Paper beats Rock.");
      humanScore += 1;
    }
    else {
      console.log("It's a tie! You both played Paper.");
    }
  }
  else if (humanChoice == "scissors") {
    if (computerChoice == "rock") {
      console.log("You lose! Rock beats Scissors.");
      computerScore += 1;
    }
    else if (computerChoice == "paper") {
      console.log("You win! Scissors beat Paper.");
      humanScore += 1;
    }
    else {
      console.log("It's a tie! You both played Scissors.");
    }
  }
  else {
    console.log("Invalid input.");
  }
}

playRound(computerChoice, humanChoice);

console.log(`Human score: ${humanScore}`);
console.log(`Computer score: ${computerScore}`);