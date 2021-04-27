
var movingRect,fixedRect;
var fixedRect2;


function setup() {
  createCanvas(400,400);
 movingRect =  createSprite(200, 200, 50, 80);
 movingRect.shapeColor = "green";
 fixedRect =  createSprite(200, 200, 80, 50);
 fixedRect.shapeColor = "green";
 fixedRect2 =  createSprite(300, 50, 80, 50);
 fixedRect2.shapeColor = "green";


}

function draw() {
  background(0);  
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  console.log(movingRect.x-fixedRect.x);
  if(isTouching(movingRect,fixedRect)){
  movingRect.shapeColor = "turquoise";
   fixedRect.shapeColor = "turquoise";
  fixedRect2.shapeColor = "green";
  }
  else if(isTouching(movingRect,fixedRect2)){
    movingRect.shapeColor = "yellow";
     fixedRect2.shapeColor = "yellow";
     fixedRect.shapeColor = "green";
    }
  


  else {
  movingRect.shapeColor = "green";
   fixedRect.shapeColor = "green";
  fixedRect2.shapeColor = "green";

  }
  drawSprites();
}










