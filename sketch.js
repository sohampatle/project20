
var fr,mr;

function setup() {
  createCanvas(800,400);
  fr = createSprite(400, 200, 50, 50);
  fr.shapeColor = "blue";
  fr.debug = true;

  mr  = createSprite(400, 100, 50, 50);
  mr.shapeColor = "blue";
  mr.debug = true;
  
}

function draw() {
  background(0);  
  mr.x = World.mouseX;
 mr.y = World.mouseY;
if(fr.x - mr.x < fr.width/2+mr.width/2 &&
  mr.x-fr.x   < fr.width/2+mr.width/2 &&
  fr.y - mr.y < fr.height/2+mr.height/2 &&
  mr.y-fr.y   < fr.height/2+mr.height/2 ){
    fr.shapeColor = "green";
    mr.shapeColor = "green";
  }
else{
  fr.shapeColor = "blue";
  mr.shapeColor = "blue";
}
  drawSprites();
}