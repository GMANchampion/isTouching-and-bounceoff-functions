var f,m;
var r1,r2;
var tr;

function setup() {
  createCanvas(1200,800);
  //createSprite(400, 200, 50, 50);
  f=createSprite(600,400,50,80);
  f.shapeColor = "green";
  f.debug=true;
  m=createSprite(400,200,80,30);
  m.shapeColor = "green";
  m.debug = true;
  r1=createSprite(700,400,50,80);
  r1.shapeColor = "green";
  r1.debug = true;
  r1.velocityY = 1;
  r2=createSprite(700,700,80,30);
  r2.shapeColor = "green";
  r2.debug = true;
  r2.velocityY = -1;
  tr=createSprite(100,100);
}

function draw() {
  background(0);
  m.x=World.mouseX;
  m.y=World.mouseY;
if(isTouching(m,tr)) {
  m.shapeColor = "red";
  tr.shapeColor = "red";
}
else {
  m.shapeColor = "green";
  tr.shapeColor = "green";
}
  
  bounceoff(r1,r2);
  drawSprites();
}
function bounceoff(o1,o2) {
//bounceOff function
if(o1.x-o2.x < o2.width/2 + o1.width/2 && o2.x-o1.x < o2.width/2 + o1.width/2){
  o1.velocityX = o1.velocityX*(-1);
  o2.velocityX = o2.velocityX*(-1);
}
if(o1.y-o2.y < o2.width/2 + o1.width/2 && o2.y-o1.y < o2.width/2 + o1.width/2){
  o1.velocityY = o1.velocityY*(-1);
  o2.velocityY = o2.velocityY*(-1);
}
}

function isTouching(ob1,ob2) {
//.isTouching function
if(ob1.x-ob2.x < ob2.width/2 + ob1.width/2 && ob2.x-ob1.x < ob2.width/2 + ob1.width/2 && ob1.y-ob2.y < ob2.height/2 + ob1.height/2 && ob1.y-ob2.y < ob2.height/2 + ob1.height/2) {
  return true;
}
else {
return false;
}
}