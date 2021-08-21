var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;
var obstaclesGroup, obstacle1, obstacle2, obstacle3;

function preload(){
  //loadImage of the path
  //loadAnimation of the boy
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Jake1.png", "Jake2.png", "jake3.png", "jake4.PNG", "jake5.png");
  obstacle1 = loadImage("bomb.png");
  obstacle2 = loadImage("coin.png");
  obstacle3 = loadImage("energyDrink.png");
}

function setup(){
  createCanvas(1000,600);
  //create sprite for the path
  //add image for the path
  //set the size of the path
  path = createSprite(500,0);
  path.addImage("moving", pathImg);
  path.scale=2.0;

  //create a boy sprite
  //add animation for the boy
  //set the size of the boy
  boy = createSprite(500,400,200,300);
  boy.addAnimation("Running", boyImg);
  boy.scale=1.5;

  // create left Boundary
  //set visibility as false for left boundary
  leftBoundary = createSprite(190,300,100,800);
  leftBoundary.visibility = false;

  // create left Boundary
  //set visibility as false for left boundary
  rightBoundary = createSprite(810,300,100,800);
  rightBoundary.visibility = false;
}

function draw() {
  background(0);
  
  // create the edge sprites
  // collide the boy with the edges
  // collide the boy with the left and right invisible boundaries.
  //make the boy move right and left
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);

  if (World.mouseX >= 348 && World.mouseX <= 652){
    boy.x = World.mouseX
  }

  path.velocityY = 8
  if (path.y > 600){
    path.y = 0
  }

  spawnObstacles();


  // draw the sprites on the canvas/screen
  drawSprites();
}

function spawnObstacles(){
  if (frameCount % 60 === 0){
    var obstacle = createSprite(400,165,10,40);
    obstacle.velocityY = + 6;
    obstacle.velocityY = 8;

    
     // //generate random obstacles
     var rand = Math.round(random(1,3));
     switch(rand) {
       case 1: obstacle.addImage(obstacle1);
               //obstacle.velocityY = 8;
               //obstacle.x = Math.random(348, 652);
               break;
       case 2: obstacle.addImage(obstacle2);
               break;
       case 3: obstacle.addImage(obstacle3);
               break;
       default: break;
     }
    
     //assign scale and lifetime to the obstacle           
     obstacle.scale = 0.5;
     obstacle.lifetime = 300;
  }
 }