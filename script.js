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
const color2 = document.querySelector('#color2');
const color3 = document.querySelector('#color3');
const color4 = document.querySelector('#color4');

function changeColorSelect(event) {
  const getColor = document.querySelector('.selected');
  getColor.classList.remove('selected');
  event.target.classList.add('selected');
}

colorBlack.addEventListener('click', changeColorSelect);
color2.addEventListener('click', changeColorSelect);
color3.addEventListener('click', changeColorSelect);
color4.addEventListener('click', changeColorSelect);

function fillPixel() {
  const allPixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < allPixel.length; index += 1) {
    allPixel[index].addEventListener('click', () => {
      const pixelSelected = document.querySelector('.selected');
      const getColor = window
        .getComputedStyle(pixelSelected)
        .getPropertyValue('background-color');
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

const vqvButton = document.querySelector('#generate-board');

function eraseOldBoard() {
  const pixLine = document.querySelectorAll('div.paletLine');
  for (let index = 0; index < pixLine.length; index += 1) {
    pixelBoard.removeChild(pixLine[index]);
  }
}

function createNewBoard() {
  let n = document.querySelector('#board-size').value;
  if (n < 5) {
    n = 5;
  } else if (n > 50) {
    n = 50;
  }
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

function randomNumber() {
  const number = Math.ceil(Math.random() * 255);
  return number;
}

function rgbRandom() {
  let colors = [];
  for (let count = 0; count < 3; count += 1) {
    let base16 = randomNumber();
    base16 = parseInt(base16, 10).toString(16);
    if (base16 === 1) {
      base16 = `0${base16}`;
    }
    colors.push(base16);
  }
  colors = colors.join('');
  return colors;
}

function loadPageColor() {
  const color234 = [color2, color3, color4];
  const newColor = [];
  for (let i = 0; i < color234.length; i += 1) {
    newColor[i] = `#${rgbRandom()}`;
    for (let index = 0; index < color234.length; index += 1) {
      color234[i].style.backgroundColor = newColor[i];
    }
  }
}

window.onload = loadPageColor;
