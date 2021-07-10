var bird,birdImg;
var pipe, pipe1Img,pipe2Img,pipe3Img,pipe4Img,pipe2;
var backgroundImg, restartImg, restart, gameOverImg;
var score;
var PLAY = 1;
var END = 0;
var gameState = PLAY;






function preload(){
birdImg = loadImage("bird.png");
pipe1Img = loadImage("1.png");
pipe2Img = loadImage("unnamed2.png");
pipe3Img = loadImage("unnamed3.png");
pipe4Img = loadImage("unnamed4.png");
backgroundImg = loadImage("background.png");
}

function setup(){
  createCanvas(600,200)
bird = createSprite(50,80,30,10);
bird.addImage("bird",birdImg);
bird.scale = 0.1  
gameOverImg = createSprite(100,50);
  restartImg = createSprite(100,40);

  restartImg.scale = 0.5;
  gameOverImg.scale = 0.5;

  restartImg.visible = false;
  gameOverImg.visible = false;

  pipeGroup = new Group();


}


function draw(){
background(backgroundImg);
pipes();

text("Score:"+ score, 500,50);

  if (gameState===PLAY){
    score = score + Math.round(getFrameRate()/60);

  }
    if (keyIsDown("RIGHT_ARROW")){
    bird.velocityX = 3
    }
  
   if(keyIsDown("UP_ARROW")){
     bird.velocityY = -2
   }
 
   if(keyIsDown("DOWN_ARROW")){
     bird.velocityY = 4
   }

   if(pipeGroup.isTouching(bird)){
     gameState = END;
   }

   else if (gameState === END) {
    gameOver.visible = true;
    restart.visible = true;
   }

   pipeGroup.setLifetimeEach(-1);

   if(mousePressedOver(restart)) {
    reset();
   }
   drawSprites();{

   }


}



function pipes(){
  if(frameCount %100 === 0){
pipe = createSprite(600,180,10,40);
pipe.velocityX = -2;

pipe2 = createSprite(600,10,10,40);
pipe2.addImage("pipe2",pipe2Img);
pipe2.velocityX = -2;
pipe2.scale = 0.1;

var rand = Math.round(random(1,3));
switch(rand){
  case 1: pipe.addImage("pipe1",pipe1Img);
          pipe.scale = 0.5;
  break;
  case 2: pipe.addImage("pipe2",pipe2Img);
  pipe.scale = 1.0;
  break;
  case 3: pipe.addImage("pipe3",pipe3Img);
  pipe.scale = 0.5;
  break;
  case 4: pipe.addImage("pipe4",pipe4Img);
  pipe.scale = 1.0;
  break;

  default:break;
}
pipe.scale = 0.5;
pipe.lifetime = 300;
pipeGroup.add(pipe);

}
}


function reset(){
gameState = PLAY;
gameOver.visible = false;
restart.visible = false;

pipeGroup.destroyEach();


score = 0;

}


  
