const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16, box17, box18, box19, box20, box21, box22 ;
var ground;
var rope;
var ball;

function preload() {
    
}

function setup(){
    var canvas = createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(1500,700,3000,20);
    
    box1 = new Box(700,320,70,70);
    box2 = new Box(700,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(700,240,70,70);
    box5 = new Box(700,160,70,70);
    box6 = new Box(700,320,70,70);
    box7 = new Box(810,320,70,70);
    box8 = new Box(810,240,70,70);
    box9 = new Box(810,240,70,70);
    box10 = new Box(810,160,70,70);
    box11 = new Box(810,320,70,70);
    box12 = new Box(810,320,70,70);
    box13 = new Box(810,240,70,70);
    box14 = new Box(920,240,70,70);
    box15 = new Box(920,160,70,70);
    box16 = new Box(920,320,70,70);
    box17 = new Box(920,320,70,70);
    box18 = new Box(920,240,70,70);
    box19 = new Box(920,240,70,70);
    box20 = new Box(920,160,70,70);
    box21 = new Box(920,320,70,70);
    box22 = new Box(920,320,70,70);

    ball = new Ball(500, 200, 75);

    rope = new Rope(ball.body,{x:500, y:50});
}

function draw(){
    background("lightblue");
    Engine.update(engine);

    ground.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    
    ball.display();

    rope.display();    
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        Matter.Body.applyForce(ball.body,ball.body.position,{x:-500,y:-450});
    }
}