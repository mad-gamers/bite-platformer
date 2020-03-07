const canvas = document.getElementById('field');
const ctx = canvas.getContext('2d');

const cat = {
  name: "Bite",
  position: {
    x: 300,
    y: 670
  }
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
    cat.position.x += horizontalVelocity;
    renderCat(cat.position);
    console.log('Байтян бежит вперёд');
  }

  if (evt.key === 'ArrowLeft') {
    cat.position.x -= horizontalVelocity;
    renderCat(cat.position);
    console.log('Байтян бежит назад');
  }

  if (evt.key === 'ArrowUp') {
    cat.position.y -= verticalVelocity;
    renderCat(cat.position);
    console.log('Байтян делает прыжок');
  }
  // console.log(evt);
});