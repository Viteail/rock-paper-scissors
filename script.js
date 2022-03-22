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
  const WinScissors =
    computerPlay() === "Paper" && playerSelection === "Scissors";
  const LoseScissors =
    computerPlay() === "Rock" && playerSelection === "Scissors";
  const TieScissors =
    computerPlay() === "Scissors" && playerSelection === "Scissors";
  /* Paper conditions */
  const WinPaper = computerPlay() === "Rock" && playerSelection === "Paper";
  const LosePaper =
    computerPlay() === "Scissors" && playerSelection === "Paper";
  const TiePaper = computerPlay() === "Paper" && playerSelection === "Paper";

  if (WinRock) {
    alert("Computer have choice Scissors");
    alert("You Win! Rock beats Scissors");
  } else if (LoseRock) {
    alert("Computer have choice Paper");
    alert("You Lose! Paper beats Rock");
  } else if (TieRock) {
    alert("Computer have choice Rock");
    alert("Its a Tie!");
  } else if (WinScissors) {
    alert("Computer have choice Paper");
    alert("You Win! Scissors beats Paper");
  } else if (LoseScissors) {
    alert("Computer have choice Rock");
    alert("You Lose! Rock beats Scissors");
  } else if (TieScissors) {
    alert("Computer have choice Scissors");
    alert("Its a Tie!");
  } else if (WinPaper) {
    alert("Computer have choice Rock");
    alert("You Win! Paper beats Rock");
  } else if (LosePaper) {
    alert("Computer have choice Scissors");
    alert("You Lose! Scissors beats Paper");
  } else if (TiePaper) {
    alert("Computer have choice Paper");
    alert("Its a Tie!");
  }
}
/*
function game() {
  let Round5 = console.log(playRound(playerSelection, computerSelection));
  for (let i = 0; i < 5; i++) {
    Round5 += playRound(i);
  }
}
*/

/* Player selection */
let playerSelection = prompt("Choice between Rock, Paper or Scissors");
if (playerSelection === "Rock" || "Paper" || "Scissors") {
  playRound();
}