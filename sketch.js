const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3, box4, box5, box6, box7;
var hero,monster,rope,ground;
var bbox1, bbox2, bbox3, bbox4, bbox5, bbox6;
var bbbox1, bbbox2, bbbox3, bbbox4, bbbox5, bbbox6, bbbox7, bbbox8;
var ox1, ox2, ox3, ox4, ox5;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);

  box1 = new Box(600, 100, 70, 70);
  box2 = new Box(600, 100, 70, 70);
  box3 = new Box(600, 100, 70, 70);
  box4 = new Box(600, 100, 70, 70);
  box5 = new Box(600, 100, 70, 70);
  box6 = new Box(600, 100, 70, 70);
  box7 = new Box(600, 100, 70, 70);

  bbox1 = new Box(700, 100, 70, 70);
  bbox2 = new Box(700, 100, 70, 70);
  bbox3 = new Box(700, 100, 70, 70);
  bbox4 = new Box(700, 100, 70, 70);
  bbox5 = new Box(700, 100, 70, 70);
  bbox6 = new Box(700, 100, 70, 70);

  bbbox1 = new Box(800, 100, 70, 70);
  bbbox2 = new Box(800, 100, 70, 70);
  bbbox3 = new Box(800, 100, 70, 70);
  bbbox4 = new Box(800, 100, 70, 70);
  bbbox5 = new Box(800, 100, 70, 70);
  bbbox6 = new Box(800, 100, 70, 70);
  bbbox7 = new Box(800, 100, 70, 70);
  bbbox8 = new Box(800, 100, 70, 70);

  ox1 = new Box(900, 100, 70, 70);
  ox2 = new Box(900, 100, 70, 70);
  ox3 = new Box(900, 100, 70, 70);
  ox4 = new Box(900, 100, 70, 70);
  ox5 = new Box(900, 100, 70, 70);

}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();

  bbox1.display();
  bbox2.display();
  bbox3.display();
  bbox4.display();
  bbox5.display();
  bbox6.display();

  bbbox1.display();
  bbbox2.display();
  bbbox3.display();
  bbbox4.display();
  bbbox5.display();
  bbbox6.display();
  bbbox7.display();
  bbbox8.display();

  ox1.display();
  ox2.display();
  ox3.display();
  ox4.display();
  ox5.display();
  
  hero.display();
  rope.display();
  monster.display();

}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x: mouseX , y: mouseY });
}
