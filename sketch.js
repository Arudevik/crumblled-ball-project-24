
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var ball;
var box1,box2,box3

function preload()
{
	
}

function setup() {
	createCanvas(1200,400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	ground = new Ground(10,400,10000,20)
	ball = new Ball(50,100,50);
	box1= new Box(730,385,180,10);
	box2= new Box(645,350,10,100)
	box3= new Box(815,350,10,100)


}


function draw() {
  rectMode(CENTER);
  background(0);
 
 ground.display();
 ball.display();
 box1.display();
 box2.display();
 box3.display();

}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:40,y:-85});
	 }
}



