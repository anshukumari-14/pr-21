
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;
var ball;
var ground;
var leftside;
var rightside;

function setup() {
  createCanvas(800, 700)
  engine = Engine.create();
  world = engine.world;

  var ball_options = {
    isStatic: false,
    restitution: 1,
    friction: 0.1,
    density: 1.2
  }
  var ground_options={
    isStatic:true
  }

  ground =Bodies.rectangle(width/2,670,width,20,ground_options);
  World.add(world,ground)
  leftside = Bodies.rectangle(790, 600, 20, 120,ground_options);
  World.add(world,leftside)
  rightside = Bodies.rectangle(600, 600, 20, 120,ground_options);
  World.add(world,rightside)

  ball = Bodies.circle(200, 200, 20, ball_options)
  World.add(world, ball)

  ellipse(RADIUS)
  rectMode(CENTER)
}
function draw() {
  background(0);

  rect(ground.position.x,ground.position.y,width,20)
  rect(leftside.position.x,leftside.position.y,20,120)
  rect(rightside.position.x,leftside.position.y,20,120)

  ellipse(ball.position.x, ball.position.y, 20)
  rectMode(CENTER)

  Engine.update(engine)

}
function keyPressed() {
  if (keyCode===RIGHT_ARROW) {

    Body.applyForce(ball, { x: 0, y: 0 }, { x: 13, y: 0 });

  }

}