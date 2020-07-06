const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var slingShot,polygon;

 //var gameState = "onSling";

function setup() {
  var canvas = createCanvas(1000,400);
    engine = Engine.create();
    world = engine.world;

    


    ground = new Ground(600,height,1200,20);
    ground1 = new Ground(355,250,215,10)
    ground2 = new Ground(655,150,215,10)
    box = new Box(265,200,30,30)
    box1 = new Box(295,200,30,30)
    box2 = new Box(325,200,30,30)
    box3 = new Box(355,200,30,30)
    box4 = new Box(385,200,30,30)
    box5 = new Box(415,200,30,30)
    box6 = new Box(445,200,30,30)
    box7 = new Box(295,230,30,30)
    box8 = new Box(325,230,30,30)
    box9 = new Box(355,230,30,30)
    box10 = new Box(385,230,30,30)
    box11 = new Box(415,230,30,30)
    box12 = new Box(385,200,30,30)
    box13 = new Box(325,200,30,30)
    box14 = new Box(355,200,30,30)
    box15 = new Box(355,150,30,30)

    box16 = new Box(565,100,30,30)
    box17 = new Box(595,100,30,30)
    box18 = new Box(625,100,30,30)
    box19 = new Box(655,100,30,30)
    box20 = new Box(685,100,30,30)
    box21 = new Box(715,100,30,30)
    box22 = new Box(745,100,30,30)
    box23 = new Box(595,130,30,30)
    box24 = new Box(625,100,30,30)
    box25 = new Box(655,130,30,30)
    box26 = new Box(685,130,30,30)
    box27 = new Box(715,130,30,30)
    box28 = new Box(625,50,30,30)
    box29 = new Box(655,50,30,30)
    box30 = new Box(685,50,30,30)
    box31 = new Box(655,20,30,30)

    polygon = new Polygon(50,200,50,50)

    

    slingShot = new SlingShot(polygon.body,{x:100,y:200})
}

function draw() {
  background(50);  
  Engine.update(engine);

  //stroke("white")
    text("Press Space For Extra Chance",700,360)

  ground.display();
  ground1.display();
  ground2.display();
  box.display();
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
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();
  box31.display();





  polygon.display();

  slingShot.display();  

}

function mouseDragged(){
  //if (gameState !== "launched")
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingShot.fly();
  //gameState = "launched"
}

function keyPressed(){
  if(keyCode === 32){
     slingShot.attach(polygon.body);
  }
}