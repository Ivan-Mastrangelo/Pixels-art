const pixelBoard = document.querySelector('#pixel-board');

for (let count = 0; count < 5; count += 1) {
  const pixLine = document.createElement('div');
  pixLine.className = 'paletLine';
  pixelBoard.appendChild(pixLine);

  for (let countPx = 0; countPx < 5; countPx += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixLine.appendChild(pixel);
  }
}

const black = document.querySelector('#black');
black.classList.add('selected');

const colorBlack = document.querySelector('#black');
const colorBlue = document.querySelector('#blue');
const colorYellow = document.querySelector('#yellow');
const colorGreen = document.querySelector('#green');

function changeColorSelect(event) {
  const getColor = document.querySelector('.selected');
  getColor.classList.remove('selected');
  event.target.classList.add('selected');
}

colorBlack.addEventListener('click', changeColorSelect);
colorBlue.addEventListener('click', changeColorSelect);
colorYellow.addEventListener('click', changeColorSelect);
colorGreen.addEventListener('click', changeColorSelect);

// const allPixel = document.querySelectorAll('.pixel');

function fillPixel() {
  const allPixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < allPixel.length; index += 1) {
    allPixel[index].addEventListener('click', () => {
      const pixelSelected = document.querySelector('.selected');
      const getColor = window.getComputedStyle(pixelSelected).getPropertyValue('background-color');
      const newColor = getColor;
      allPixel[index].style.backgroundColor = newColor;
    });
  }
}

fillPixel();

const clearButton = document.querySelector('#clear-board');

function clearBoard() {
  const allPixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < allPixel.length; index += 1) {
    allPixel[index].style.backgroundColor = 'white';
  }
}

clearButton.addEventListener('click', clearBoard);

// const input = document.querySelector('#board-size');
const vqvButton = document.querySelector('#generate-board');

function eraseOldBoard() {
  const pixLine = document.querySelectorAll('div.paletLine');
  for (let index = 0; index < pixLine.length; index += 1) {
    pixelBoard.removeChild(pixLine[index]);
  }
}

function createNewBoard() {
  const n = document.querySelector('#board-size').value;
  for (let count = 0; count < n; count += 1) {
    const pixLine = document.createElement('div');
    pixLine.className = 'paletLine';
    pixelBoard.appendChild(pixLine);
    for (let countPx = 0; countPx < n; countPx += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixLine.appendChild(pixel);
    }
  }
}

function newGrid() {
  const n = document.querySelector('#board-size').value;
  if (n !== '') {
    eraseOldBoard();
    createNewBoard();
    fillPixel();
    clearBoard();
  } else {
    alert('Board inválido!');
  }
}

vqvButton.addEventListener('click', newGrid);
