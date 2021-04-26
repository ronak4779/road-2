var grid = 50;
var width = 1366;
var carGroup1,logGroup1;
var grassHeight = 100;
var gameState = PLAY;
var carAnimation, logAnimation, playerAnimation;
var school;
var cars;
var Log;
var player;
function preload(){

}


function setup() {
  createCanvas(1366,700);
 
  carGroup1 = new Group();
  logGroup1 = new Group();
  
  for(var i=0;i<6;i++){
    var bottomGrass1 = createSprite(683,height-50-(i*400),width,grassHeight);
    if(i%2===0)
    {
      var road =createSprite(683,height-150-(i*400)-grassHeight,width,300)
      road.shapeColor="black";
    }
    bottomGrass1.shapeColor = "grey";

    for(i=1;i<logGroup1.length;i++){
      if(logGroup1[i].x<0)
      {
        logGroup1[i].x=width;
      }
    }
  
    for(var i = 0; i < 40; i ++ ){
      Cars = new Car(2);
      carGroup1.add(Cars.spt)
    } 

  }

  

  
   
 }

  
  
  
function draw() {
  background("skyblue");
  player = new Player(width/2,height-25);
  translate(0 ,-player.spt.y+height-150);
 
  function keyPressed(){
    if(keyCode == UP_ARROW){
      player.velocity(0 ,-2);
    }else if(keyCode == DOWN_ARROW){
     player.velocity(0 ,2);
    }else if(keyCode == LEFT_ARROW){
     player.velocity(-2 , 0);
    }else if(keyCode == RIGHT_ARROW){
     player.velocity(2 , 0);
    }
   }

  drawSprites();
}

