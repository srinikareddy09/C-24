const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    var ball_options ={
        restitution: 1.0
    }
      
    ground = new Ground(600,390,1200,20);
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810,350);
    log1 = new Log(810,260,300,20,PI);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig2 = new Pig(810,220);
    log2 = new Log(810,170,300,20,PI);

    box5 = new Box(810,160,70,70);
    log3 = new Log(760,120,160,20,PI/7);
    log4 = new Log(860,120,160,20,PI/-7);

    bird = new Bird(100,100,50,50);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);

    ground.display();
    box1.display();
    box2.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig2.display();
    log2.display();

    box5.display();
    log3.display();
    log4.display();

    bird.display();
}