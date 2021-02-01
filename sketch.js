
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var dustbin1,dustbin2,dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground=new Ground(400,690,800,20);

	paper=new Paper(100,200,40);

	dustbin1=new Dustbin(750,630,20,100);
	dustbin2=new Dustbin(640,670,200,20);
	dustbin3=new Dustbin(530,630,20,100);


	Engine.run(engine);
	keyPressed();
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  
  paper.display();

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:60,y:-60});
	}
}

