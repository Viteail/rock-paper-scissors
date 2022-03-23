function computerPlay() {
  const randomChoice = Math.floor(Math.random() * 3);
  switch (randomChoice) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    case 2:
      return "Scissors";
  }
}

function playRound() {
  /* Rock conditions */
  const WinRock = computerPlay() === "Scissors" && playerSelection === "Rock";
  const LoseRock = computerPlay() === "Paper" && playerSelection === "Rock";
  const TieRock = computerPlay() === "Rock" && playerSelection === "Rock";
  /* Scissors conditions */
  const WinScissors = computerPlay() === "Paper" && playerSelection === "Scissors";
  const LoseScissors = computerPlay() === "Rock" && playerSelection === "Scissors";
  const TieScissors = computerPlay() === "Scissors" && playerSelection === "Scissors";
  /* Paper conditions */
  const WinPaper = computerPlay() === "Rock" && playerSelection === "Paper";
  const LosePaper = computerPlay() === "Scissors" && playerSelection === "Paper";
  const TiePaper = computerPlay() === "Paper" && playerSelection === "Paper";

  if (WinRock) {
    console.log("Computer have choice Scissors");
    console.log("You choice Rock!");
    console.log("You Win! Rock beats Scissors");
  } else if (LoseRock) {
    console.log("Computer have choice Paper");
    console.log("You choice Rock!");
    console.log("You Lose! Paper beats Rock");
  } else if (TieRock) {
    console.log("Computer have choice Rock");
    console.log("You choice Rock!");
    console.log("Its a Tie!");
  } else if (WinScissors) {
    console.log("Computer have choice Paper");
    console.log("You choice Scissors!");
    console.log("You Win! Scissors beats Paper");
  } else if (LoseScissors) {
    console.log("Computer have choice Rock");
    console.log("You choice Scissors!");
    console.log("You Lose! Rock beats Scissors");
  } else if (TieScissors) {
    console.log("Computer have choice Scissors");
    console.log("You choice Scissors!");
    console.log("Its a Tie!");
  } else if (WinPaper) {
    console.log("Computer have choice Rock");
    console.log("You choice Paper!");
    console.log("You Win! Paper beats Rock");
  } else if (LosePaper) {
    console.log("Computer have choice Scissors");
    console.log("You choice Paper!");
    console.log("You Lose! Scissors beats Paper");
  } else if (TiePaper) {
    console.log("Computer have choice Paper");
    console.log("You choice Paper!");
    console.log("Its a Tie!");
  } else
  return alert('Error pls refresh page');
}

/* Player selection */

const playerSelection = prompt("Select Rock, Paper or Scissors");
if ((playerSelection === null && "Rock") || "Paper" || "Scissors") {
  playRound();
}
