let PCScore = 0;
let PlayerScore = 0;
let Rounds = 1;


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

const ComputerSelection = computerPlay();

function playRound() {
  /* Rock conditions */
  const WinRock =
    ComputerSelection === "Scissors" && playerSelection === "Rock";
  const LoseRock = ComputerSelection === "Paper" && playerSelection === "Rock";
  const TieRock = ComputerSelection === "Rock" && playerSelection === "Rock";
  /* Scissors conditions */
  const WinScissors =
    ComputerSelection === "Paper" && playerSelection === "Scissors";
  const LoseScissors =
    ComputerSelection === "Rock" && playerSelection === "Scissors";
  const TieScissors =
    ComputerSelection === "Scissors" && playerSelection === "Scissors";
  /* Paper conditions */
  const WinPaper = ComputerSelection === "Rock" && playerSelection === "Paper";
  const LosePaper =
    ComputerSelection === "Scissors" && playerSelection === "Paper";
  const TiePaper = ComputerSelection === "Paper" && playerSelection === "Paper";

  if (WinRock) {
    console.log("Computer have choice Scissors");
    console.log("You choice Rock!");
    console.log("You Win! Rock beats Scissors");
    PlayerScore++;
  } else if (LoseRock) {
    console.log("Computer have choice Paper");
    console.log("You choice Rock!");
    console.log("You Lose! Paper beats Rock");
    PCScore++;
  } else if (TieRock) {
    console.log("Computer have choice Rock");
    console.log("You choice Rock!");
    console.log("Its a Tie!");
  } else if (WinScissors) {
    console.log("Computer have choice Paper");
    console.log("You choice Scissors!");
    console.log("You Win! Scissors beats Paper");
    PlayerScore++;
  } else if (LoseScissors) {
    console.log("Computer have choice Rock");
    console.log("You choice Scissors!");
    console.log("You Lose! Rock beats Scissors");
    PCScore++;
  } else if (TieScissors) {
    console.log("Computer have choice Scissors");
    console.log("You choice Scissors!");
    console.log("Its a Tie!");
  } else if (WinPaper) {
    console.log("Computer have choice Rock");
    console.log("You choice Paper!");
    console.log("You Win! Paper beats Rock");
    PlayerScore++;
  } else if (LosePaper) {
    console.log("Computer have choice Scissors");
    console.log("You choice Paper!");
    console.log("You Lose! Scissors beats Paper");
    PCScore++;
  } else if (TiePaper) {
    console.log("Computer have choice Paper");
    console.log("You choice Paper!");
    console.log("Its a Tie!");
  }
  if (PlayerScore > PCScore) {
    console.log('You Won!')
  } else if (PCScore > PlayerScore) {
  console.log('You Lose!')
  } else if (PCScore === PlayerScore) {
  console.log('Its a Tie!')
  }
}

/* Player selection */

const playerSelection = prompt("Select Rock, Paper or Scissors");

if ((playerSelection === null && "Rock") || "Paper" || "Scissors") {
  playRound();
}