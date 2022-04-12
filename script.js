const MOVES = {
  ROCK: "Rock",
  PAPER: "Paper",
  SCISSORS: "Scissors",
};

const SCORES = {
  PLAYERSCORE: 0,
  PCSCORE: 0,
};

const ROUNDS = {
  ROUND: 1,
};

// PC-Selection
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

// display-moves
const SHOWPLAYERMOVE = document.querySelector(".Player-Selected");
const SHOWPCMOVE = document.querySelector(".PC-Selected");
const SHOWWINNER = document.querySelector(".Winner");
// display-scores
const SHOWPLAYERSCORE = document.querySelector(".PL-SCORE");
const SHOWPCSCORE = document.querySelector(".PC-SCORE");
// display-rounds
const SHOWFINALWINNER = document.querySelector(".Round");
const SHOWROUNDS = document.querySelector(".ROUNDS");

// play-again button
const getPlayAgainButton = document.querySelector("#PlayAgain");
getPlayAgainButton.addEventListener("click", () => playRound(PlayAgain));
// Player selection

const getRockButton = document.querySelector("#Rock");
getRockButton.addEventListener("click", () => playRound(MOVES.ROCK));

const getPaperButton = document.querySelector("#Paper");
getPaperButton.addEventListener("click", () => playRound(MOVES.PAPER));

const getScissorsButton = document.querySelector("#Scissors");
getScissorsButton.addEventListener("click", () => playRound(MOVES.SCISSORS));

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

  if (playerSelection === PlayAgain) {
    return (
      (ROUNDS.ROUND = 1),
      (SHOWFINALWINNER.innerHTML =
        "Round " + "<span class='ROUNDS'>" + `${ROUNDS.ROUND}` + "</span>"),
      (SHOWWINNER.textContent = "Please select your move"),
      (SCORES.PLAYERSCORE = 0),
      (SCORES.PCSCORE = 0),
      (SHOWPCSCORE.textContent = SCORES.PLAYERSCORE),
      (SHOWPLAYERSCORE.textContent = SCORES.PLAYERSCORE),
      getPlayAgainButton.classList.add("disable")
    );
  }

  if (ROUNDS.ROUND === 5) {
    return;
  }
  // conditions
  if (PCMoveIsScissors && PlayerMoveIsRock) {
    SHOWPCMOVE.textContent = "Computer have choice Scissors";
    SHOWPLAYERMOVE.textContent = "You choice Rock!";
    SHOWWINNER.textContent = "You Win! Rock beats Scissors";
    SCORES.PLAYERSCORE++, (SHOWPLAYERSCORE.textContent = SCORES.PLAYERSCORE);
    ROUNDS.ROUND++,
      (SHOWFINALWINNER.innerHTML = "Round" + " " + `${ROUNDS.ROUND}`);
  } else if (PCMoveIsPaper && PlayerMoveIsRock) {
    SHOWPCMOVE.textContent = "Computer have choice Paper";
    SHOWPLAYERMOVE.textContent = "You choice Rock!";
    SHOWWINNER.textContent = "You Lose! Paper beats Rock";
    SCORES.PCSCORE++, (SHOWPCSCORE.textContent = SCORES.PCSCORE);
    ROUNDS.ROUND++,
      (SHOWFINALWINNER.innerHTML = "Round" + " " + `${ROUNDS.ROUND}`);
  } else if (PCMoveIsRock && PlayerMoveIsRock) {
    SHOWPCMOVE.textContent = "Computer have choice Rock";
    SHOWPLAYERMOVE.textContent = "You choice Rock!";
    SHOWWINNER.textContent = "Its a Tie!";
    SCORES.PLAYERSCORE++, (SHOWPLAYERSCORE.textContent = SCORES.PLAYERSCORE);
    SCORES.PCSCORE++, (SHOWPCSCORE.textContent = SCORES.PCSCORE);
    ROUNDS.ROUND++,
      (SHOWFINALWINNER.innerHTML = "Round" + " " + `${ROUNDS.ROUND}`);
  } else if (PCMoveIsPaper && PlayerMoveIsScissors) {
    SHOWPCMOVE.textContent = "Computer have choice Paper";
    SHOWPLAYERMOVE.textContent = "You choice Scissors!";
    SHOWWINNER.textContent = "You Win! Scissors beats Paper";
    SCORES.PLAYERSCORE++, (SHOWPLAYERSCORE.textContent = SCORES.PLAYERSCORE);
    ROUNDS.ROUND++,
      (SHOWFINALWINNER.innerHTML = "Round" + " " + `${ROUNDS.ROUND}`);
  } else if (PCMoveIsRock && PlayerMoveIsScissors) {
    SHOWPCMOVE.textContent = "Computer have choice Rock";
    SHOWPLAYERMOVE.textContent = "You choice Scissors!";
    SHOWWINNER.textContent = "You Lose! Rock beats Scissors";
    SCORES.PCSCORE++, (SHOWPCSCORE.textContent = SCORES.PCSCORE);
    ROUNDS.ROUND++,
      (SHOWFINALWINNER.innerHTML = "Round" + " " + `${ROUNDS.ROUND}`);
  } else if (PCMoveIsScissors && PlayerMoveIsScissors) {
    SHOWPCMOVE.textContent = "Computer have choice Scissors";
    SHOWPLAYERMOVE.textContent = "You choice Scissors!";
    SHOWWINNER.textContent = "Its a Tie!";
    SCORES.PLAYERSCORE++, (SHOWPLAYERSCORE.textContent = SCORES.PLAYERSCORE);
    SCORES.PCSCORE++, (SHOWPCSCORE.textContent = SCORES.PCSCORE);
    ROUNDS.ROUND++,
      (SHOWFINALWINNER.innerHTML = "Round" + " " + `${ROUNDS.ROUND}`);
  } else if (PCMoveIsRock && PlayerMoveIsPaper) {
    SHOWPCMOVE.textContent = "Computer have choice Rock";
    SHOWPLAYERMOVE.textContent = "You choice Paper!";
    SHOWWINNER.textContent = "You Win! Paper beats Rock";
    SCORES.PLAYERSCORE++, (SHOWPLAYERSCORE.textContent = SCORES.PLAYERSCORE);
    ROUNDS.ROUND++,
      (SHOWFINALWINNER.innerHTML = "Round" + " " + `${ROUNDS.ROUND}`);
  } else if (PCMoveIsScissors && PlayerMoveIsPaper) {
    SHOWPCMOVE.textContent = "Computer have choice Scissors";
    SHOWPLAYERMOVE.textContent = "You choice Paper!";
    SHOWWINNER.textContent = "You Lose! Scissors beats Paper";
    SCORES.PCSCORE++, (SHOWPCSCORE.textContent = SCORES.PCSCORE);
    ROUNDS.ROUND++,
      (SHOWFINALWINNER.innerHTML = "Round" + " " + `${ROUNDS.ROUND}`);
  } else if (PCMoveIsPaper && PlayerMoveIsPaper) {
    SHOWPCMOVE.textContent = "Computer have choice Paper";
    SHOWPLAYERMOVE.textContent = "You choice Paper!";
    SHOWWINNER.textContent = "Its a Tie!";
    SCORES.PLAYERSCORE++, (SHOWPLAYERSCORE.textContent = SCORES.PLAYERSCORE);
    SCORES.PCSCORE++, (SHOWPCSCORE.textContent = SCORES.PCSCORE);
    ROUNDS.ROUND++,
      (SHOWFINALWINNER.innerHTML = "Round" + " " + `${ROUNDS.ROUND}`);
  }
  if (ROUNDS.ROUND === 5) {
    setTimeout(rounds, 1000);
    return;
  }
}

function rounds() {
  if (ROUNDS.ROUND === 5 && SCORES.PLAYERSCORE > SCORES.PCSCORE) {
    SHOWFINALWINNER.textContent = "Congratulation!";
    SHOWWINNER.textContent = "You Win!";
    SHOWPCMOVE.textContent = "";
    SHOWPLAYERMOVE.textContent = "";
    getPlayAgainButton.classList.remove("disable");
  } else if (ROUNDS.ROUND === 5 && SCORES.PLAYERSCORE < SCORES.PCSCORE) {
    SHOWFINALWINNER.textContent = "Soorrryy!";
    SHOWWINNER.textContent = "You Lost, PC Wins!";
    SHOWPCMOVE.textContent = "";
    SHOWPLAYERMOVE.textContent = "";
    getPlayAgainButton.classList.remove("disable");
  } else if (ROUNDS.ROUND === 5 && SCORES.PLAYERSCORE === SCORES.PCSCORE) {
    SHOWFINALWINNER.textContent = "Oh!";
    SHOWWINNER.textContent = "It's a Tie!";
    SHOWPCMOVE.textContent = "";
    SHOWPLAYERMOVE.textContent = "";
    getPlayAgainButton.classList.remove("disable");
  }
}
