for (let count = 0; count < 5; count += 1) {
  const pixLine = document.createElement('div');
  pixLine.className = 'paletLine';
  document.querySelector('#pixel-board').appendChild(pixLine);

  for (let countPx = 0; countPx < 5; countPx += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixLine.appendChild(pixel);
  }
}

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
