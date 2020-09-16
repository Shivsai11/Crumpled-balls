var ground, box1, box2, box3, paper;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 500);
	
	engine = Engine.create();
	world = engine.world;
	
	var ground_options ={
	 isStatic: true,
	}
	ground = new Box(600, 470, 1200, 60, );
	Engine.run(engine);

	box1 = new Box(800, 390, 20, 100);
	box2 = new Box(950, 390, 20, 100);
	box3 = new Box(875, 430, 170, 20);
	paper = new Paper(50, 300, 30);
}


function draw() {
  rectMode(CENTER);
  background(0, 200, 240);
  Engine.update(engine);

  box1.display();
  box2.display();
  box3.display();
  ground.display();
  paper.display();
  drawSprites();

  if(keyDown("up")){
	  Matter.Body.applyForce(paper.body, paper.body.position,{x:600, y:-500})
  }
 
}



