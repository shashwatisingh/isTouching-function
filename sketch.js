var fixedRect,movingRect;
var monkey,ground,banana;




function setup() {
  var canvas = createCanvas(1200,600);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(200,300,100,20);

  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";

  fixedRect.debug=true;
  movingRect.debug=true;

monkey = createSprite(700,100,50,40);
monkey.shapeColor = "brown";
ground = createSprite(200,300,60,40);
ground.shapeColor = "darkgreen";
banana = createSprite(300,500,40,20);
banana.shapeColor = "yellow";

}

function draw() {
  background(0);
  
  movingRect.x =mouseX;
  movingRect.y = mouseY;

 if( isTouching(movingRect,monkey)){
 monkey.shapeColor="cyan";
  movingRect.shapeColor="cyan";
 }

else{
  monkey.shapeColor="brown";
  movingRect.shapeColor="green";

}



  drawSprites();
}

function isTouching(object1,object2){
  if(object1.x-object2.x<object2.width/2+object1.width/2
    && object2.x-object1.x<object2.width/2+object1.width/2
    && object2.y-object1.y<object2.height/2+object1.height/2
    && object1.y-object2.y<object2.height/2+object1.height/2)
    {
   return true;
  
  }
  else{
    return false
  
  }

  
}
//boolean values : true / false


