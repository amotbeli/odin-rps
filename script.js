function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}



function getHumanChoice() {
  return prompt("Enter your choice ('rock', 'paper', 'scissors')").toLowerCase();
}

function playRound() {
  let computerChoice = getComputerChoice();
  let humanChoice = getHumanChoice();

  console.log(`You played: ${humanChoice}`);
  console.log(`Computer played: ${computerChoice}`);

  if (humanChoice == "rock" && computerChoice == "scissors" || humanChoice == "paper" && computerChoice == "rock" || humanChoice == "scissors" && computerChoice == "paper") {
    console.log(`${humanChoice} beats ${computerChoice}!\n\n`);
    return "human wins!";
  }
  else if(computerChoice == "rock" && humanChoice == "scissors" || computerChoice == "paper" && humanChoice == "rock" || computerChoice == "scissors" && humanChoice == "paper") {
    console.log(`${computerChoice} beat ${humanChoice}!\n\n`);
    return "computer wins!";
  }
  else {
    console.log(`You both played ${humanChoice}.\n\n`);
    return "it's a tie!";
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (i = 0; i < 5; i++) {
    console.log(`Round ${i+1}\n\n`)
    result = playRound();
    switch (result) {
      case "human wins!":
        humanScore += 1;
        break;
      case "computer wins!":
        computerScore += 1;
        break;
    }
    console.log(`Human: ${humanScore}, Computer: ${computerScore}\n\n`);
  }
  console.log("Final Score:")
  console.log(`Human: ${humanScore}`);
  console.log(`Computer: ${computerScore}`);
  (humanScore > computerScore)
    ? console.log("Human wins!")
    : (humanScore < computerScore)
      ? console.log("Computer wins!")
      : console.log("It's a tie.")
}

// playGame();