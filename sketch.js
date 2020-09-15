// namespacing
const Engine= Matter.Engine
const World= Matter.World
const Bodies= Matter.Bodies


var myengine,myworld;
var object,ground,ball;

function setup() {
  createCanvas(400,400);
    myengine=Engine.create();
    myworld=myengine.world;

    var object_option={ isStatic:true }
    var ball_option={restitution:1}
    ground= Bodies.rectangle(200,380,400,9,object_option);
    World.add(myworld,ground);
   ball=Bodies.circle(200,200,10,ball_option)
   World.add(myworld,ball)
    console.log(ground.position.x);
    console.log(ground.position.y);
}

function draw() {
  background(0);  
  Engine.update(myengine);
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400, 9);
  
  drawSprites();
}