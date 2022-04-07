const MOVES = {
  ROCK: 'Rock',
  PAPER: 'Paper',
  SCISSORS: 'Scissors'
}

function computerPlay() {
  const randomChoice = Math.floor(Math.random() * 3);
  switch (randomChoice) {
    case 0:
      return MOVES.ROCK;
    case 1:
      return MOVES.PAPER;
    case 2:
      return MOVES.SCISSORS;
  }
}

// Player selection

const RockButton = document.querySelector("#Rock");
RockButton.addEventListener("click", () => playRound(MOVES.ROCK));

const PaperButton = document.querySelector("#Paper");
PaperButton.addEventListener("click", () => playRound(MOVES.PAPER));


const ScissorsButton = document.querySelector("#Scissors");
ScissorsButton.addEventListener("click", () => playRound(MOVES.SCISSORS));


function playRound(playerSelection, ComputerSelection) {
  // player moves
  const PlayerMoveIsRock = playerSelection === MOVES.ROCK;
  const PlayerMoveIsPaper = playerSelection === MOVES.PAPER;
  const PlayerMoveIsScissors = playerSelection === MOVES.SCISSORS;
  // PC moves
  ComputerSelection = computerPlay(this);
  const PCMoveIsRock = ComputerSelection === MOVES.ROCK;
  const PCMoveIsPaper = ComputerSelection === MOVES.PAPER;
  const PCMoveIsScissors = ComputerSelection === MOVES.SCISSORS;

  if (PCMoveIsScissors && PlayerMoveIsRock) {
    console.log("Computer have choice Scissors");
    console.log("You choice Rock!");
    console.log("You Win! Rock beats Scissors");
  } else if (PCMoveIsPaper && PlayerMoveIsRock) {
    console.log("Computer have choice Paper");
    console.log("You choice Rock!");
    console.log("You Lose! Paper beats Rock");
  } else if (PCMoveIsRock && PlayerMoveIsRock) {
    console.log("Computer have choice Rock");
    console.log("You choice Rock!");
    console.log("Its a Tie!");
  } else if (PCMoveIsPaper && PlayerMoveIsScissors) {
    console.log("Computer have choice Paper");
    console.log("You choice Scissors!");
    console.log("You Win! Scissors beats Paper");
  } else if (PCMoveIsRock && PlayerMoveIsScissors) {
    console.log("Computer have choice Rock");
    console.log("You choice Scissors!");
    console.log("You Lose! Rock beats Scissors");
  } else if (PCMoveIsScissors && PlayerMoveIsScissors) {
    console.log("Computer have choice Scissors");
    console.log("You choice Scissors!");
    console.log("Its a Tie!");
  } else if (PCMoveIsRock && PlayerMoveIsPaper) {
    console.log("Computer have choice Rock");
    console.log("You choice Paper!");
    console.log("You Win! Paper beats Rock");
  } else if (PCMoveIsScissors && PlayerMoveIsPaper) {
    console.log("Computer have choice Scissors");
    console.log("You choice Paper!");
    console.log("You Lose! Scissors beats Paper");
  } else if (PCMoveIsPaper && PlayerMoveIsPaper) {
    console.log("Computer have choice Paper");
    console.log("You choice Paper!");
    console.log("Its a Tie!");
  }
}
