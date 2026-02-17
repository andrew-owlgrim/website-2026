/* Конфиг */

const minMineProbability = 0.15;
const maxMineProbability = 0.3;
const shortClickTime = 300;
const cellSize = 32;
const deadZone = 5;

/* Инициализация */

const visibleField = document.querySelector(".field");
const cellCounter = document.querySelector("#cell-counter");
const timeCounter = document.querySelector("#time-counter");
const restartButton = document.querySelector(".btn.icon-restart");
const welcome = document.querySelector(".welcome");

restartButton.addEventListener("click", restart);
document.addEventListener("DOMContentLoaded", createVisibleField);

/* Обработка ввода */

let translateX = 0;
let translateY = 0;

// Нажатие
visibleField.addEventListener('mousedown', pressStart);
visibleField.addEventListener('touchstart', pressStart);
function pressStart(e) {
  let pressStartX = e.pageX || e.touches[0].pageX;
  let pressStartY = e.pageY || e.touches[0].pageY;
  let pressStartTime = e.timeStamp;
  let startTranslateX = pressStartX - translateX;
  let startTranslateY = pressStartY - translateY;

  //Таскаем поле
  visibleField.addEventListener('mousemove', pressMove);
  visibleField.addEventListener('touchmove', pressMove);
  function pressMove(e) { 
    let pressMoveX = e.pageX || e.touches[0].pageX;
    let pressMoveY = e.pageY || e.touches[0].pageY;
    translateX = pressMoveX - startTranslateX;
    translateY = pressMoveY - startTranslateY;
    visibleField.style.transform = `translateX(${translateX}px) translateY(${translateY}px)`;
  }

  // Отпустило
  visibleField.addEventListener('touchend', pressEnd);
  visibleField.addEventListener('mouseup', pressEnd);
  function pressEnd(e){
    visibleField.removeEventListener('touchmove', pressMove);
    visibleField.removeEventListener('mousemove', pressMove);
    visibleField.removeEventListener('touchend', pressEnd);
    visibleField.removeEventListener('mouseup', pressEnd);

    if(e.button == 2) return;

    let pressEndX = e.pageX || e.changedTouches[0].pageX;
    let pressEndY = e.pageY || e.changedTouches[0].pageY;
    let pressEndTime = e.timeStamp;

    if (Math.abs(pressEndX - pressStartX) <= deadZone && Math.abs(pressEndY - pressStartY) <= deadZone) {
      let td = e.target.parentNode;
      let tr = td.parentNode;
      fieldX = visibleArea.startX + td.cellIndex;
      fieldY = visibleArea.startY + tr.rowIndex;

      if (pressEndTime - pressStartTime < shortClickTime) openCell(fieldX, fieldY);
      else markCell(fieldX, fieldY);
    }
    else changeVisibleArea();

    displayField();
  }
}

visibleField.addEventListener("contextmenu", function(e) {
  let td = e.target.parentNode;
  let tr = td.parentNode;
  fieldX = visibleArea.startX + td.cellIndex;
  fieldY = visibleArea.startY + tr.rowIndex;

  markCell(fieldX, fieldY);
  e.preventDefault();
});

/* Видимое поле */

visibleField.array = [];
const visibleArea = {
  startX: 0,
  sizeX: 0,
  startY: 0,
  sizeY: 0,
}

// Cоздаем видимое поле
function createVisibleField() {
  visibleArea.sizeX = Math.ceil(window.innerWidth / cellSize ) * 3;
  visibleArea.sizeY = Math.ceil(window.innerHeight / cellSize ) * 3;

  for (y = 0; y < visibleArea.sizeY; y++) {
    let tr = document.createElement("tr");
    visibleField.appendChild(tr);
    for (x = 0; x < visibleArea.sizeX; x++) {
      let td = document.createElement("td");
      let cell = document.createElement("div");
      cell.className = "cell";
      tr.appendChild(td);
      td.appendChild(cell);
    }
  }

  visibleField.style.left = window.innerWidth / 2 -  visibleArea.sizeX * cellSize / 2 + "px";
  visibleField.style.top = window.innerHeight / 2 -  visibleArea.sizeY * cellSize / 2 + "px";
}

// Обновление зоны видимого поля
function changeVisibleArea() {
  let visibleAreaShiftX = translateX < 0 ? Math.floor(-translateX / cellSize) : Math.ceil(-translateX / cellSize);
  let visibleAreaShiftY = translateY < 0 ? Math.floor(-translateY / cellSize) : Math.ceil(-translateY / cellSize);
  visibleArea.startX += visibleAreaShiftX;
  visibleArea.startY += visibleAreaShiftY;
  translateX = translateX % cellSize;
  translateY = translateY % cellSize;
  visibleField.style.transform = `translateX(${translateX}px) translateY(${translateY}px)`;
}

// Отображение поля
function displayField() {
  for (let y = visibleArea.startY; y < visibleArea.startY + visibleArea.sizeY; y++) {
    for (let x = visibleArea.startX; x < visibleArea.startX + visibleArea.sizeX; x++) {
      displayCell(x, y);
    }
  }
}

// Отображение клетки
function displayCell(x, y) {
  let cell = visibleField.rows[y - visibleArea.startY].cells[x - visibleArea.startX].childNodes[0];
  cell.className = "cell";
  cell.textContent = '';

  if (field[y] && field[y][x]) {
    
    if (field[y][x].state == 'o') {
      switch (field[y][x].value) {
        case 0:
          cell.classList.add("cell_o");
          break;
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
          cell.classList.add("cell_o");
          cell.textContent = field[y][x].value;
          break;
        case 10: 
          cell.classList.add("cell_o");
          cell.classList.add("icon-mine");
      }
    }

    if (field[y][x].state == 'f') {
      cell.classList.add("cell_f");
      cell.textContent = "!";
    }

    if (field[y][x].state == 'm') {
      cell.classList.add("cell_m", "icon-mine");
    }
  }
}

/* Счетчики */

let cells = 0;
cellCounter.textContent = cells;
let time = 0;
let displayTime = Math.floor(time / 60000) + ":" + Math.floor(time % 60000 / 1000) + "." + time % 1000;
timeCounter.textContent = displayTime;

/* Геймплей */

let game = {prepared: 0, continues: 1, finished: 2,};
game.state = game.prepared;

let field = [];
let mineProbability = minMineProbability;

function around(x, y, func, includeCenter, radius) {
  let range = radius ? radius : 1;
  for (let i = -range; i <= range; i++) {
    if (!field[y + i]) field[y + i] = [];
    for (let j = -range; j <= range; j++) {
      if (!includeCenter && i == 0 && j == 0) continue;
      func(x + j, y + i);
    }
  }
}

function createCell(x, y) {
  around(x, y, function(xx, yy) {
    if (!field[yy][xx]) {
      let isMine = Math.random() < mineProbability;
      if (isMine) field[yy][xx] = {state: 'c', value: 10};
      else field[yy][xx] = {state: 'c', value: 0};
    }
  }, true);
}

function openCell(x, y) {
  if (field[y] && field[y][x] && field[y][x].state !== 'c') return;

  if (game.state == game.prepared) {
    start(x, y);
  }

  if (game.state == game.continues) {
    createCell(x, y);
    
    if (field[y][x].value == 10) {
      field[y][x].state = 'm';
      finish();
    }
    else {
      field[y][x].state = 'o';

      around(x, y, function(xx, yy) {
        if (field[yy][xx].value == 10) field[y][x].value++;
      }, false);
      
      if (field[y][x].value == 0) {
        console.log("Запускаем рекурсию");
        setTimeout(function(){
          around(x, y, openCell, false);
        }, 10);
      }
    }

    displayCell(x, y);
  } 
}

function markCell(x, y) {
  if(!game.state == game.continues) return;
  createCell(x, y);

  if (field[y][x].state == 'o') return;
  if (field[y][x].state == 'c') field[y][x].state = 'f';
  else if (field[y][x].state == 'f') field[y][x].state = 'c';

  displayCell(x, y);
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

function start(x, y) {
  game.state = game.continues;
  welcome.classList.add("hide");
  around(x, y, function(xx, yy) {
    field[yy][xx] = {state: 'c', value: 0};
  }, true, 2);
}

function restart() {
  game.state = game.prepared;
  restartButton.classList.remove("cell_m");
  welcome.classList.remove("hide");
  field = [];
  displayField();
}

function finish() {
  game.state = game.finished;
  restartButton.classList.add("cell_m");
}