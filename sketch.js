//namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground;
var ball;

function setup() {
  createCanvas(400,400);
  
  //creating the physics engine
  engine = Engine.create();

  //referring to the world to be part of the engine
  world = engine.world;

  //creating a body
  ground = Bodies.rectangle(200,390,400,20,{isStatic: true});

  //adding body to the world
  World.add(world,ground);

  //printing ground properties
  console.log(ground);
  console.log(ground.position.x);
  console.log(ground.position.y);

  ball=Bodies.circle(200,100,20,{restitution:1});
  World.add(world,ball);
  console.log(ball);
}

function draw() {
  background(0);  

  Engine.update(engine);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);

  ellipseMode(CENTER);
  ellipse(ball.position.x,ball.position.y,20,20);
}