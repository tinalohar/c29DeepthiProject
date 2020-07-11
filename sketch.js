const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Render=Matter.Render;

var ground,base1,base2;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var box11,box12,box13,box14,box15,box16;

var polygon,slingshot;


function setup() {
  var canvas = createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,height,800,50);
  base1 = new Ground(300,300,200,10);
  base2 = new Ground(600,200,150,5);

  box1 = new Box(235,280);
  box2 = new Box(275,280);
  box3 = new Box(315,280);
  box4 = new Box(355,280);
  box5 = new Box(255,250);
  box6 = new Box(295,250);
  box7 = new Box(335,250);
  box8 = new Box(275,220);
  box9 = new Box(315,220);
  box10 = new Box(295,190);

  box11 = new Box(555,180);
  box12 = new Box(595,180);
  box13 = new Box(635,180);
  box14 = new Box(575,150);
  box15 = new Box(615,150);
  box16 = new Box(595,120);

  polygon = Bodies.circle(50,200,20,{
    'restitution':0.8,
    'friction':1.0,
    'density':1.0
});
  console.log(polygon);
  World.add(world,polygon);

  slingshot = new SlingShot(polygon,{x:100,y:200});
  var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      width: 1200,
      height: 700,
      wireframes: false
    }
  });
  Render.run(render);



}

function draw() {
  background("yellow");
  push();
  fill("blue");
  ellipseMode(RADIUS)
  ellipse(polygon.position.x,polygon.position.y,20,20);
  pop()
  
  ground.display();
  base1.display();
  base2.display();

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
  slingshot.display()
 
}

function mouseDragged(){
  Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}
