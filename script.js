const MOVES = {
  ROCK: "Rock",
  PAPER: "Paper",
  SCISSORS: "Scissors",
};

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
  // display
  const SHOWPLAYERMOVE = document.querySelector(".Player-Selected");
  const SHOWPCMOVE = document.querySelector(".PC-Selected");
  const SHOWWINNER = document.querySelector(".Winner");

  if (PCMoveIsScissors && PlayerMoveIsRock) {
    SHOWPCMOVE.textContent = "Computer have choice Scissors";
    SHOWPLAYERMOVE.textContent = "You choice Rock!";
    SHOWWINNER.textContent = "You Win! Rock beats Scissors";
  } else if (PCMoveIsPaper && PlayerMoveIsRock) {
    SHOWPCMOVE.textContent = "Computer have choice Paper";
    SHOWPLAYERMOVE.textContent = "You choice Rock!";
    SHOWWINNER.textContent = "You Lose! Paper beats Rock";
  } else if (PCMoveIsRock && PlayerMoveIsRock) {
    SHOWPCMOVE.textContent = "Computer have choice Rock";
    SHOWPLAYERMOVE.textContent = "You choice Rock!";
    SHOWWINNER.textContent = "Its a Tie!";
  } else if (PCMoveIsPaper && PlayerMoveIsScissors) {
    SHOWPCMOVE.textContent = "Computer have choice Paper";
    SHOWPLAYERMOVE.textContent = "You choice Scissors!";
    SHOWWINNER.textContent = "You Win! Scissors beats Paper";
  } else if (PCMoveIsRock && PlayerMoveIsScissors) {
    SHOWPCMOVE.textContent = "Computer have choice Rock";
    SHOWPLAYERMOVE.textContent = "You choice Scissors!";
    SHOWWINNER.textContent = "You Lose! Rock beats Scissors";
  } else if (PCMoveIsScissors && PlayerMoveIsScissors) {
    SHOWPCMOVE.textContent = "Computer have choice Scissors";
    SHOWPLAYERMOVE.textContent = "You choice Scissors!";
    SHOWWINNER.textContent = "Its a Tie!";
  } else if (PCMoveIsRock && PlayerMoveIsPaper) {
    SHOWPCMOVE.textContent = "Computer have choice Rock";
    SHOWPLAYERMOVE.textContent = "You choice Paper!";
    SHOWWINNER.textContent = "You Win! Paper beats Rock";
  } else if (PCMoveIsScissors && PlayerMoveIsPaper) {
    SHOWPCMOVE.textContent = "Computer have choice Scissors";
    SHOWPLAYERMOVE.textContent = "You choice Paper!";
    SHOWWINNER.textContent = "You Lose! Scissors beats Paper";
  } else if (PCMoveIsPaper && PlayerMoveIsPaper) {
    SHOWPCMOVE.textContent = "Computer have choice Paper";
    SHOWPLAYERMOVE.textContent = "You choice Paper!";
    SHOWWINNER.textContent = "Its a Tie!";
  }
}
