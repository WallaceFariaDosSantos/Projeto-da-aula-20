const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ball, ground;
var angle = 60;
var wall, wall2, wall3, wall4, wall5, wall6, wall7;

//configuração
function setup() {
  createCanvas(400, 400);

  engine = Engine.create();
  world = engine.world;

  //propriedades da bola
  var wall_options = {
    restitution: 0.99, //saltitar
    frictionAir: 0.05 //atrito com o ar
  };

  var wall2_options = {
    restitution: 0.99, //saltitar
    frictionAir: 0.04 //atrito com o ar
  };

  var wall3_options = {
    restitution: 0.99, //saltitar
    frictionAir: 0.03 //atrito com o ar
  };

  var wall4_options = {
    restitution: 0.99, //saltitar
    frictionAir: 0.02 //atrito com o ar
  };

  var wall5_options = {
    restitution: 0.99, //saltitar
    frictionAir: 0.01 //atrito com o ar
  };

  var wall6_options = {
    restitution: 0.99, //saltitar
    frictionAir: 0.005 //atrito com o ar
  };

  var wall7_options = {
    restitution: 0.99, //saltitar
    frictionAir: 0.0025 //atrito com o ar
  };

  var wall8_options = {
    restitution: 1.63, //saltitar
    frictionAir: 0.00125 //atrito com o ar
  };

  //propriedade do chão
  var options = {
    isStatic: true //para deixar o objeto parado
  };

  //propriedades da bola
  var ball_options = {
    restitution: 0.99, //saltitar
    frictionAir: 0.01 //atrito com o ar
  };

  //corpo do chão
  ground = Bodies.rectangle(200, 390, 400, 20, options);
  //adicionando no mundo o objeto criado
  World.add(world, ground);

  //corpo da wall(parede) -- aluno
  wall = Bodies.rectangle(20, 150, 40, 100, wall_options);
  World.add(world, wall);

  wall2 = Bodies.rectangle(60, 150, 40, 100, wall2_options);
  World.add(world, wall2);

  wall3 = Bodies.rectangle(100, 150, 40, 100, wall3_options);
  World.add(world, wall3);

  wall4 = Bodies.rectangle(140, 150, 40, 100, wall4_options);
  World.add(world, wall4);

  wall5 = Bodies.rectangle(180, 150, 40, 100, wall5_options);
  World.add(world, wall5);

  wall6 = Bodies.rectangle(220, 150, 40, 100, wall6_options);
  World.add(world, wall6);

  wall7 = Bodies.rectangle(260, 150, 40, 100, wall7_options);
  World.add(world, wall7);

  wall8 = Bodies.rectangle(340, 150, 120, 100, wall8_options);
  World.add(world, wall8);

  //bola
  ball = Bodies.circle(200, -5000, 20, ball_options);
  World.add(world, ball);
  //centraliza o chão
  rectMode(CENTER);
  //aumenta o raio da bola
  ellipseMode(RADIUS);
}

function draw(){
  background("black");

  //atualização da física
  Engine.update(engine);

  //pintando o chão
  fill("white");
  rect(ground.position.x, ground.position.y, 400, 20);

  //exibir a paredes
  fill("red");
  rect(wall.position.x, wall.position.y, 40, 100);
  fill("orange");
  rect(wall2.position.x, wall2.position.y, 40, 100);
  fill("yellow");
  rect(wall3.position.x, wall3.position.y, 40, 100);
  fill("green");
  rect(wall4.position.x, wall4.position.y, 40, 100);
  fill("blue");
  rect(wall5.position.x, wall5.position.y, 40, 100);
  fill("magenta");
  rect(wall6.position.x, wall6.position.y, 40, 100);
  fill("purple");
  rect(wall7.position.x, wall7.position.y, 40, 100);
  fill("white");
  rect(wall8.position.x, wall8.position.y, 120, 100);

  //exibir a bola
  fill("brown");
  ellipse(ball.position.x, ball.position.y, 20);
}
