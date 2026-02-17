const visibleField = document.querySelector(".field");
const cellCounter = document.querySelector("#cell-counter");
const timeCounter = document.querySelector("#time-counter");
const restartButton = document.querySelector(".btn.icon-restart");
restartButton.addEventListener("click", () => {restart();});

let fieldSizeX = 20;
let fieldSizeY = 20;
let numberOfMines = 10;

let field = [];
visibleField.array = [];

let cells = 0;
let time = 0;
let displayTime = Math.floor(time / 60000) + ":" + Math.floor(time % 60000 / 1000) + "." + time % 1000;
timeCounter.textContent = displayTime;

let game = {prepared: 0, continues: 1, lost: 2, won: 3,};
game.state = game.prepared;

function createField(startY, startX) {
  for (i = 0; i < fieldSizeY; i ++) {
    field[i] = [];
  }

  for (i = 0; i < numberOfMines; i++){
    let randomY = Math.floor(Math.random() * fieldSizeY);
    let randomX = Math.floor(Math.random() * fieldSizeX);
    if (randomY >= startY - 1 && randomY <= startY + 1 && randomX >= startX - 1 && randomX <= startX + 1) {
      i--;
      continue;
    }
    if (field[randomY][randomX] !== 'm') field[randomY][randomX] = 'm';
    else i--;
  }

  for (y = 0; y < fieldSizeY; y++){
    for (x = 0; x < fieldSizeY; x++){
      if (field[y][x] == 'm') continue;
      let minesAround = 0;
      for (i = 0; i < 9; i++){
        let Y = y + Math.floor(i / 3) - 1;
        let X = x + Math.floor(i % 3) - 1;
        if (Y < 0 || Y >= fieldSizeY || X < 0 || X >= fieldSizeX) continue;
        if (field[Y][X] == 'm') minesAround++;
      }
      field[y][x] = minesAround;
    }
  }
}

function createVisibleField() {
  for (let y = 0; y < fieldSizeY; y++) {
    visibleField.array[y] = [];
    let row = document.createElement("div");
    row.classList = "row";
    visibleField.appendChild(row);
    for(let x = 0; x < fieldSizeX; x++) {
      let cell = document.createElement("div");
      cell.classList = "cell cell_h";
      row.appendChild(cell);
      visibleField.array[y][x] = cell;
      visibleField.array[y][x].addEventListener("click", () => openCell(y, x));
      visibleField.array[y][x].addEventListener("contextmenu", (e) => {
        markCell(y, x);
        e.preventDefault();
      });
    }
  }
}

function openCell(y, x) {
  if (game.state == game.lost || !visibleField.array[y][x].classList.contains('cell_h')) return;
  if (game.state == game.prepared) start(y, x);
  visibleField.array[y][x].classList.remove("cell_h");
  if (field[y][x] > 0) {
    visibleField.array[y][x].textContent = field[y][x];
  };
  if (field[y][x] == 'm') {
    loose(y, x);
  };
  if (field[y][x] == 0) {
    for (let i = -1; i < 2; i++){
      if (y + i < 0 || y + i >= fieldSizeY) continue;
      for (let j = -1; j < 2; j++){
        if (x + j < 0 || x + j >= fieldSizeX) continue;
        setTimeout(() => {openCell(y + i, x + j)}, 100);
      }
    }
  }
}

function markCell(y, x) {
  if (game.state !== game.continues || !visibleField.array[y][x].classList.contains("cell_h")) return;
  visibleField.array[y][x].classList.toggle("icon-marker");
  visibleField.array[y][x].classList.toggle("cell_f");
}

function start(y, x) {
  game.state = game.continues;
  createField(y, x);
}
function loose(y, x) {
  game.state = game.lost;
  visibleField.array[y][x].classList.add("icon-mine", "cell_m");
  for (y = 0; y < fieldSizeY; y++) {
    for (x = 0; x < fieldSizeX; x++) {
      if (field[y][x] == 'm' && !visibleField.array[y][x].classList.contains("cell_f")) {
        visibleField.array[y][x].classList.remove("cell_h");
        visibleField.array[y][x].classList.add("icon-mine");
      }
    }
  }
  restartButton.classList.add("cell_m");
}

function restart() {
  game.state = game.prepared;
  visibleField.innerHTML = "";
  createVisibleField();
  restartButton.classList.remove("cell_m");
}

document.addEventListener("DOMContentLoaded", function(){
  createVisibleField();
});