const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var box1,box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1= new Box(100,200,50,50);
    box2=new Box(120,10,50,70);

    console.log(ground);

    ground=new Ground(200,380,400,10);
}

function draw(){
    background(0);
    Engine.update(engine);
    
    box1.display();
    ground.display();
    box2.display();
}