const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var Pig1;

function setup(){
    var canvas = createCanvas(1000,800);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,500,50,50);
    box2 = new Box(400,500,50,50);
    box3 = new Box(200,300,50,50);
    box4 = new Box(400,300,50,50);
    box5 = new Box(300,100,50,50);
    Pig1 = new Pig(300,500,50,50);
    Pig2 = new Pig(300,300,50,50);
    log1 = new log(280,450,300,PI/2)
    log2 = new log(280,250,300,PI/2)
    log3 = new log(250,50,100,PI/7)
    log4 = new log(350,50,100,-PI/7)
    bird = new Bird(200,200)
    ground = new Ground(500,height,1000,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    Pig1.display();
    Pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird.display();
    ground.display();
}