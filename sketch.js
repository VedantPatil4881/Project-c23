const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world,ball,ground

function setup() {
  createCanvas(400,400);
  //create the engine
  engine = Engine.create()
  //Add world to the engine
  world = engine.world

  
   var ball_options = {
    restitution : 0.95,
    
  }
   
   var ground_options = {
    isStatic : true
   }
  
  
  ball = Bodies.circle(200,20,40,ball_options);
  World.add(world,ball);
  ground = Bodies.rectangle(0,380,800,10,ground_options);
  World.add(world,ground);
  
}


function draw() 
{
  background("black");
  Engine.update(engine);

  
  
  ellipse(ball.position.x,ball.position.y,40);
 
  rect(ground.position.x,ground.position.y,800,10);

  
  
}

