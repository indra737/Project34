
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint
const Render = Matter.Render;
var building1
var building2
var building3
var building4
var building5
var world;
var ball;
var slingshot
var g
var my
function preload(){
g= loadImage('GamingBackground.png')
}
function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	building1= new Building(500,600,90,90)
	building2= new Building(500,500,90,90)
	building3= new Building(500,400,90,90)
	building4= new Building(500,300,90,90)
	building5= new Building(500,200,90,90)
	building6= new Building(600,600,90,90)
	building7= new Building(600,500,90,90)
	building8= new Building(600,400,90,90)
	building9= new Building(600,300,90,90)
	building10= new Building(700,600,90,90)
	building11= new Building(700,500,90,90)
	building12= new Building(700,400,90,90)
	building13= new Building(700,200,90,90)
	building14= new Building(700,100,90,90)
	building15= new Building(700,300,90,90)
	building16= new Building(800,600,90,90)
	building17= new Building(800,500,90,90)
	building18= new Building(800,400,90,90)
	ground= new Ground(350,height-40,width,40)
	ball= new Ball(200,500,300,150)
	monster= new Monster(1000,500,200,150)
	slingshot= new Slingshot(ball.body,{x:200, y:300})
	
	Engine.run(engine);
   
}


function draw() {
  rectMode(CENTER);
  background(g);
  my= mouseY
  ball.display()
 building1.display()
 building2.display()
 building3.display()
 building4.display()
 building5.display()
 building6.display()
 building7.display()
 building8.display()
 building9.display()
 building10.display()
 building15.display()
 building14.display()
 building13.display()
 building12.display()
 building11.display()
 building16.display()
 building17.display()
 building18.display()
  ground.display()
  monster.display()
//  slingshot.show()
}

function mouseDragged(){
	Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
	Matter.Body.setPosition(ball.body, {x: 300 , y: 300});
	slingshot.attach(ball.body)
}

