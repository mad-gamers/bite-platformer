const canvas = document.getElementById('field');
const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.arc(50, 50, 30, 0, Math.PI*2);
ctx.fillStyle = '#260602';
ctx.fill();
ctx.closePath();