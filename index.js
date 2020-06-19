let canvas = document.getElementById('stonks-canvas')
const context = canvas.getContext('2d');
let base_image = new Image();

const option = {
  width:400,
  height:400
}

setCanvaProps(canvas)
initCanvas(canvas)

function setCanvaProps(canvas){
  canvas.width = option.width || window.innerWidth;
  canvas.height = option.height || window.innerHeight;
}

async function initCanvas(){
  drawStonksImage()
}

function drawStonksImage(){
  const stonksType = document.getElementById('stonks-type').value

  base_image = new Image();
  base_image.src = `./img/${stonksType}.png`;
  base_image.onload = () => {
    context.drawImage(base_image, 0, 0, 400, 400);
    drawStonksText();
  }
}

function drawStonksText(){
  context.drawImage(base_image, 0, 0, 400, 400);
  const text = document.getElementById('text-for-stonks').value
  const angle = document.getElementById('angle-for-stonks').value
  console.log(text, angle)
  
  context.save();
    context.font = "39px Arial";
    context.fillStyle ="white"
    context.translate(option.width/2, option.height/2)
    context.rotate(-Math.PI*angle/180);
    context.fillText(text, 0, 0);
  context.restore()
  
}


function downloadImage(){
  var link = document.createElement('a');
  link.download = 'filename.png';
  link.href = canvas.toDataURL()
  link.click();
}