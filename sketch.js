const {World, Engine, Bodies, Body, Constraint} = Matter;

var engine, world, canvas;
var backgroundImg1, backgroundImg2, backgroundImg3;

const BEGINNING = 0;
const PLAY_LEVEL1 = 1;
const PLAY_LEVEL2 = 2;
const GAME_END1 = 3 ;
const GAME_END2 = 4 ;

var gameState = 1;
var ground, stand, left_Wall, right_wall;
var steps = [];
var randX, randVelocity; 

function preload(){
  backgroundImg1 = loadImage("assets/backgroundImg1.jpg");
  backgroundImg2 = loadImage("assets/backgroundImg2.jpg");
  backgroundImg3 = loadImage("assets/backgroundImg3.jpg");
}

function setup() {
  engine = Engine.create();
  world = engine.world;
  canvas = createCanvas(windowWidth,windowHeight);

  // ground create 
  ground = createSprite(width/2, height+10 , width, 20);

  // wall create 
  left_Wall = createSprite(30, height/2, 20, height);
  left_Wall.visible = false;
  right_wall = createSprite(width-30, height/2, 20, height);
  right_wall.visible = false;
  

  // beginning stand point 
  stand = createSprite(100, height -10, 200, 20);
  stand.shapeColor = "blue";

  // steps create 
    for (var j = 50; j < height-100; j = j +100){
      randX = random(200, width - 200);
      var step = createSprite(randX, j, 130, 20);
      steps.push(step);
      randVelocity = random(-3, 3);

    }
  

}

function draw() {
  Engine.update(engine);

  if(gameState === BEGINNING){
    beginning();
  }
  if(gameState === PLAY_LEVEL1){
    play_level_1();
  }
  if(gameState === PLAY_LEVEL2){
    play_level_2();
  }
  if(gameState === GAME_END1){
    game_end_1();
  }
  if(gameState === GAME_END2){
    game_end_2();
  }


  drawSprites();
}

function beginning(){
  background(backgroundImg1);  

  
}
function play_level_1(){
  background(backgroundImg2);  
  for(var step of steps){

    step.shapeColor = "red";
    step.collide(left_Wall);
    step.collide(right_wall);


    for(var i=0; i<steps.length; i++){
      if(i % 2===0){
          steps[i].velocityX = 5;
      }

      if(i % 2!==0){
        steps[i].velocityX = -5;
      }
   }
     

  }
}
function play_level_2(){
  background(backgroundImg3);  

}
function game_end_1(){
  background(backgroundImg2);  

}
function game_end_2(){
  background(backgroundImg3);  

}