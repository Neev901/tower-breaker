const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;


var engine, world;
var ball1, ground1, string;
var tower1, tower2, tower3

function setup() {
    var canvas = createCanvas(1200, 600);
    engine = Engine.create();
    world = engine.world;
    ball1 = new Ball(500,400,50)
    string = new constraint(ball1.body,{x:500,y:300})
    ground1 = new ground(600,500,1300,20)
    tower1 = new tower(600,340,20,100)
    tower2 = new tower(700,315,30,150)
    tower3 = new tower(800,290,25,200)
}

function draw() {
    background(0);
    Engine.update(engine);
    ball1.display()
    string.display()
    ground1.display()
    tower1.display()
    tower2.display()
    tower3.display()
}

function mouseDragged(){
  Matter.Body.setPosition(ball1.body, {x:mouseX, y:mouseY}) 
}