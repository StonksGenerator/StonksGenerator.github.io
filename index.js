let canvas = document.getElementById('stonks-canvas')
const context = canvas.getContext('2d');

setCanvaProps(canvas)
initCanvas(canvas)

function setCanvaProps(canvas){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

async function initCanvas(){

  base_image = new Image();
  base_image.src = 'stonks.png';
  base_image.onload = () => context.drawImage(base_image, 100, 100, 400, 400);
}

function drawStonksText(){
  const input = document.getElementById('text-for-stonks')
  console.log(input.value)

  context.font = "39px Arial";
  context.fillStyle ="white"
  context.fillText(input.value, 250, 300);
}