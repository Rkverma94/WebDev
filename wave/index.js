//Initial Setup
const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const c = canvas.getContext('2d');

//Variables
let mouse = {
  x:canvas.width/2,
  y:canvas.height/2
}

let colors = [
  '#2C3E50',
  '#E74C3C',
  '#ECF0F1',
  '#3498DB',
  '#2980B9'
]

//Event Listerner
window.addEventListener('mousemove',(event)=>{
  mouse.x=event.clientX;
  mouse.y=event.clientY;
});

window.addEventListener('resize',()=>{
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});

//utility function
function randomColor(colors){
  return colors[Math.floor(Math.random()*colors.length)];
}

function randomIntRange(min,max){
  return Math.floor(Math.random()*(max-min+1)+min);
}

//Object
function Particle(x,y,dx,radius,color){
  this.x=x;
  this.y=y;
  this.dx=dx;
  this.radius=radius;
  this.color=randomColor(colors);
  this.radian = 0;
  this.amplitude = 0.05;
  this.update=()=>{
    if(this.x+this.radius>canvas.width || this.x<0){
      this.dx=-this.dx;
    }
    this.radian += this.amplitude;
    this.x += this.dx;

    this.y += Math.sin(this.radian)*5;


    //Interactivity



    this.draw();
  }

  this.draw=()=>{
    c.beginPath();
    c.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
    c.fillStyle = randomColor(colors);
    c.fill();
    c.closePath();
  }
}


//Initialization
let particles;
function init(){
  particles=[];
  let dx=1;
  let radius=5;
  let color=randomColor(colors);
  for(let i=0;i<50;i++){
    let x=randomIntRange(1,canvas.width/10);
    let y=canvas.height/2;
    particles.push(new Particle(x,y,dx,radius,color));
  }
  console.log(particles);
}

function animate(){
  window.requestAnimationFrame(animate);
  c.fillStyle='rgba(0,0,0,0.1)';
  c.fillRect(0,0,canvas.width,canvas.height);
  //c.clearRect(0,0,canvas.width,canvas.height);
  for(let i=0;i<50;i++){
    particles[i].update();
  }
}

init();
animate();
