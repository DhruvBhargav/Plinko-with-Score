const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,ground
var plinko = [];
var particle, score;
var score = 0
gameState = "start"




function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(240,790,480,20);
  division1 = new Division(100,690,10,180);
  division2 = new Division(200,690,10,180);
  division3 = new Division(300,690,10,180);
  division4 = new Division(400,690,10,180);

for (var i = 50;i<width ;i = i + 50){
  plinko.push(new Plinko(i,75,10))
}
for (var i = 75;i<width-20 ;i = i + 50){
  plinko.push(new Plinko(i,175,10))
}
for (var i = 50;i<width ;i = i + 50){
  plinko.push(new Plinko(i,275,10))
}


  Engine.run(engine);
}

function draw() {
  background("green");
  ground.display();
  division1.display();
  division2.display(); 
  division3.display(); 
  division4.display(); 
  if(particle!= null){
    console.log("particleDisplay");
    particle.display();
    if(particle.body.position.y>750){
      if(particle.body.position.x<100 && particle.body.position.x>10){
        score = score+500;
        particle = null;
      }
      else if(particle.body.position.x<200 && particle.body.position.x>101){
        score = score+300;
        particle = null;
      }
      if(particle.body.position.x<300 && particle.body.position.x>201){
        score = score+100;
        particle = null;
      }
      else if(particle.body.position.x<400 && particle.body.position.x>301){
        score = score+100;
        particle = null;
      }
      if(particle.body.position.x<500 && particle.body.position.x>401){
        score = score+500;
        particle = null;
      }
    }
  }
  for(var i = 0;i<plinko.length;i++) {
    plinko[i].display();
  }
  text("Score = "+score , 20,40)
  text ("500", 20, 575)
  text ("300", 120, 575)
  text ("100", 220, 575)
  text ("100", 320, 575)
  text ("500", 420, 575)
  drawSprites();
  }
  function mousePressed(){
    if(gameState!="end"){
      console.log("mousePressed");
      particle = new Particle(mouseX,20,10);
    }
  }