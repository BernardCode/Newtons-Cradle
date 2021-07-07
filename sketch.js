const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob1, bobb2, bob3, bob4, bob5;
var rope1,rope2,rope3,rope4,rope5;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}
	var ball_options={
		isStatic:false,
		restitution:1,
		density:0.6
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	bob1 = Bodies.circle(320,300,20,ball_options);
	World.add(world,bob1);

	bob2 = Bodies.circle(360,300,20,ball_options);
	World.add(world,bob2);

	bob3 = Bodies.circle(400,300,20,ball_options);
	World.add(world,bob3);

	bob4 = Bodies.circle(440,300,20,ball_options);
	World.add(world,bob4);

	bob5 = Bodies.circle(480,300,20,ball_options);
	World.add(world,bob5);

	rope1 = new Rope(roof,bob1,roof.position,bob1.position);
	rope2 = new Rope(roof,bob2,roof.position,bob2.position);
	rope3 = new Rope(roof,bob3,roof.position,bob3.position);
	rope4 = new Rope(roof,bob4,roof.position,bob4.position);
	rope5 = new Rope(roof,bob5,roof.position,bob5.position);

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background("lightblue");

  fill (204,159,55);
  rect(roof.position.x,roof.position.y,200,20);
  fill (36,255,94);
  ellipse(bob1.position.x,bob1.position.y,20);
  ellipse(bob2.position.x,bob2.position.y,20);
  ellipse(bob3.position.x,bob3.position.y,20);
  ellipse(bob4.position.x,bob4.position.y,20);
  ellipse(bob5.position.x,bob5.position.y,20);

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(bob1,bob1.position,{x:-20,y:0});
	}
}