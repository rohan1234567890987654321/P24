
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperobj
var dustbinobj

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paperobj = new Paper(200,450,40)
dustbinobj = new Dustbin(1200,650)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paperobj.display()
  dustbinobj.display
  drawSprites();
 
}



