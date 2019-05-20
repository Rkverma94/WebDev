//Initial setup
let canvas=document.querySelector("canvas");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
let c=canvas.getContext('2d');


//Variables
let mouse = {
  x:innerWidth/2,
  y:innerHeight/2
};

let colors = [
  '#2C3E50',
  '#E74C3C',
  '#ECF0F1',
  '#3498DB',
  '#2980B9'
];

let gravity = 1;
let friction = 0.98;
//Event Listeners
window.addEventListener('mousemove',function(event){
  mouse.x=event.clientX;
  mouse.y=event.clientY;
});

window.addEventListener('resize',function(){
  canvas.width=window.innerWidth;
  canvas.height=window.innerHeight;

  init();

});

//Utility Functions
function randomIntFromRange(min,max){
  return Math.floor(Math.random()*(max-min + 1)+min);
}

function randomColor(colors){
  return colors[Math.floor(Math.random()*colors.length)]
}



function Ball(x,y,dx,dy,radius,color){
  this.x=x;
  this.y=y;
  this.dx=dx;
  this.dy=dy;
  this.radius=radius;
  this.color=color;

  this.update=()=>{
    if(this.y + this.radius +this.dy > canvas.height){
      this.dy=-this.dy * friction;
    }
    else{
      this.dy+=gravity;
    }
    if(this.x+this.radius > canvas.width || this.x-this.radius < 0){
      this.dx=-this.dx;
    }
    this.x+=this.dx;
    this.y+=this.dy;


    // //sound
    // if(this.x+this.radius == canvas.height){
    //   let sound=document.createElement('audio');
    //   sound.src='bounce.mp3';
    //   //sound.play();
    // }


    this.draw();



  }

  this.draw=()=>{
    c.beginPath();
    c.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
    c.fillStyle=this.color;
    c.fill();
    c.closePath();
  }
}


let ballArr=[];
//Implementation
function init(){
  let radius = 20;
  for(let i=0;i<250;i++){
    let x = randomIntFromRange(radius,canvas.width-radius);
    let y = randomIntFromRange(0,canvas.height/2);
    let dx = randomIntFromRange(-2,2);
    let dy = randomIntFromRange(-2,2);
    ballArr.push(new Ball(x,y,dx,dy,20,randomColor(colors)))
  }
}


//Animation Loop
function animate(){
  c.clearRect(0,0,canvas.width,canvas.height);
  for(let i=0;i<ballArr.length;i++){
    ballArr[i].update();
  }
  //c.fillText("Unrequited Love is Infinite Source of PAIN", mouse.x,mouse.y);
  window.requestAnimationFrame(animate)
}

init();
animate();
