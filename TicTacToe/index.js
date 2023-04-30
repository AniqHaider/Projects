const board = document.getElementById("board");
const cells = board.querySelectorAll(".cell");
const reset = document.getElementById("reset");
let player = "X";

cells.forEach((cell) => {
  cell.addEventListener("click", handleClick);
});

function handleClick(e) {
  const cell = e.target;
  cell.textContent = player;
  cell.removeEventListener("click", handleClick); // Remove the event listener so a clicked cell can't be clicked again
  if (checkWin()) {
    setTimeout(() => {
      alert(`${player} wins!`);
      resetGame();
    }, 300); // delay of 0.3 seconds
  } else if (checkDraw()) {
    setTimeout(() => {
      alert(`It's a draw!`);
      resetGame();
    }, 300); // delay of 0.3 seconds
  } else {
    player = player === "X" ? "O" : "X";
  }
}

function checkWin() {
  const winningCombos = [
    [0, 1, 2],[3, 4, 5],[6, 7, 8], // rows
    [0, 3, 6],[1, 4, 7],[2, 5, 8], // columns
    [0, 4, 8],[2, 4, 6], // diagonals
  ];
  return winningCombos.some((combo) => {
    return combo.every((index) => {
      return cells[index].textContent === player;
    });
  });
}

function checkDraw() {
  return [...cells].every((cell) => {
    return cell.textContent !== "";
  });
}
function resetGame() {
  cells.forEach((cell) => {
    cell.textContent = "";
    cell.addEventListener("click", handleClick); // Add the event listener back when game restarts
  });
  player = "X";
}

reset.addEventListener("click", resetGame);
