var rabbit, rabbitImg;
var garden, gardenImg;
var apple, appleImg;
var leaves, leavesImg;
var edges;

function preload(){
  rabbitImg = loadImage("rabbit.png");
  gardenImg = loadImage("garden.png");
  appleImg = loadImage("apple.jpg");
  leavesImg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
  // Moving background
  garden=createSprite(200,200);
  garden.addImage("garden",gardenImg);

  //creating rabbit running
  rabbit = createSprite(160,340,20,20);
  rabbit.addImage(rabbitImg);
  rabbit.scale = 0.09;
  
  
  

}


function draw() {
  background(0);

  rabbit.x = World.mouseX;
  
  edges = createEdgeSprites();

  rabbit.collide(edges);


  drawSprites();


var select_sprites = Math.round(random(1,2));

if(frameCount % 80 == 0) {

  if(select_sprites == 1) {
    createApples();
  }
  else {
    createLeaves();
  }
}
}

function createApples(){
  apple = createSprite(random(50,350), 40, 10, 10);
  apple.addImage(appleImg);
  apple.scale = 0.07;
  apple.velocityY = 4;
  apple.lifetime = 100; 
}

function createLeaves(){
  leaves = createSprite(random(50,350), 40, 20, 20);
  leaves.addImage(leavesImg);
  leaves.scale = 0.05;
  leaves.velocityY = 4;
  leaves.lifetime = 100;
}
