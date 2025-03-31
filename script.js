let computerChoice = getComputerChoice();

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

let humanChoice = getHumanChoice();

function getHumanChoice() {
  return prompt("Enter your choice ('rock', 'paper', 'scissors')")
}

console.log(`Computer Choice: ${computerChoice}`);
console.log(`Human Choice: ${humanChoice}`);