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
