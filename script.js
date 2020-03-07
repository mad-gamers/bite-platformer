const canvas = document.getElementById('field');
const ctx = canvas.getContext('2d');

const cat = {
  name: "Bite",
  position: {
    x: 300,
    y: 670
  },
  direction: 'none'
}

const renderCat = ({x, y}) => {
  ctx.clearRect(0, 0, 700, 700);

  ctx.beginPath();
  ctx.arc(x, y, 30, 0, Math.PI*2);
  ctx.fillStyle = '#260602';
  ctx.fill();
  ctx.closePath();
}

renderCat(cat.position);

const cell = 10;
const horizontalVelocity = cell;
const verticalVelocity = cell * 10;

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'ArrowRight') {
    cat.direction = 'forward';
  }

  if (evt.key === 'ArrowLeft') {
    cat.direction = 'backward';
  }

  if (evt.key === 'ArrowUp') {
    cat.direction = 'up';
  }
});

document.addEventListener('keyup', (evt) => {
  if (evt.key === 'ArrowRight' && cat.direction === 'forward') {
    cat.direction = 'none';
  }

  if (evt.key === 'ArrowLeft' && cat.direction === 'backward') {
    cat.direction = 'none';
  }
});

const fps = 60;
const frameTime = 1000 / fps;

setInterval(() => {

  if (cat.direction === 'forward') {
    cat.position.x += horizontalVelocity;
  }

  if (cat.direction === 'backward') {
    cat.position.x -= horizontalVelocity;
  }

  if (cat.direction === 'up') {
    cat.position.y -= verticalVelocity;
    cat.direction = 'none';
  }

  renderCat(cat.position);
}, frameTime);