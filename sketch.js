// module aliases
var Engine = Matter.Engine,
    //Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

// create an engine
var engine;
var world;
var boxes = [];
var groud;
function setup() {
    createCanvas(400, 400);
    engine = Engine.create();
    world = engine.world;

    Engine.run(engine);

    groud = Bodies.rectangle(width / 2, height, width, 100, { isStatic: true});
    fill(150);
    
    World.add(world, groud);
}

function mousePressed() {
    boxes.push(new Box(mouseX, mouseY, random(15,35), random(15,35)));
}

function draw() {
    background(51);
    rect(0, 0, groud.h, groud.h);
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].show();
    }
    
    stroke(255);
    fill(170);
    strokeWeight(1);
    rectMode(CENTER);
    //line(200, height, width, 100);
    rect(groud.position.x, groud.position.y, width, 100);

}

 
/*
// create a renderer
var render = Render.create({
    element: document.body,
    engine: engine
});

// create two boxes and a ground

var boxB = Bodies.rectangle(450, 50, 80, 80);
var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

// add all of the bodies to the world
World.add(engine.world, [boxA, boxB, ground]);

// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);
*/