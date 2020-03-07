const canvas = document.getElementById('field');
const ctx = canvas.getContext('2d');

const cat = {
  name: "Bite",
  position: {
    x: 50,
    y: 50
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

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'ArrowRight') {
    cat.position.x += cell;
    renderCat(cat.position);
    console.log('Байтян бежит вправо');
  }
  // console.log(evt);
});