
var trex, trex_running;
var ground, grounImage;
var edges;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)
  //create trex

  trex = createSprite(50,160,40,20);
  trex.addAnimation("running trex",trex_running);
  trex.scale = 0.5;

  ground = createSprite(50,180,600,20);
  ground.addImage("infinite ground", groundImage);
  
  edges = createEdgeSprites();
  
}

function draw(){
  background("white");

  if(keyDown("space")){
    trex.velocityY = -10;
  }
 trex.velocityY = trex.velocityY + 0.5;

 trex.collide(ground);
  
 drawSprites()
}
