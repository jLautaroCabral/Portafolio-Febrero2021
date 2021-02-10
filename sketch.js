// module aliases
var Engine = Matter.Engine,
    //Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Constraint = Matter.Constraint;

// create an engine
var engine;
var world;
var boxes = [];
var circles = [];
var boundaries = [];

var ground;

function setup() {
    createCanvas(700, 700);
    engine = Engine.create();
    world = engine.world;

    Engine.run(engine);

    //boundaries.push(new Boundary(0, height/2, width, 20, 0.2));
    //boundaries.push(new Boundary(width, height/4, width, 20, -0.2));

    createBox();

    let prev = null;
    for (let x = 60; x < 380; x += 40) {
        let fixed = false;

        if(!prev)
            fixed = true;

        var p = new Ellipse(x, 100, 10, fixed);
        circles.push(p);

        if(prev) {
            var options = {
                bodyA: p.body,
                bodyB: prev.body,
                lenght: 50,
                stiffness: 0.1,
            }
            var constraint = Constraint.create(options);
            World.add(world, constraint);
        }
        prev = p;
    }
}

function createBox() {
    boundaries.push(new Boundary(width/2, height, width, 20, 0)); // Bottom
    boundaries.push(new Boundary(width/2, 0, width, 20, 0)); // Top
    boundaries.push(new Boundary(0, height/2, 20, height, 0)); // Left
    boundaries.push(new Boundary(width, height/2, 20, height, 0)); // Right
}

function mousePressed() {
}
function mouseDragged() {
}

let timer = 0;
function invoke(t, func) { // Por el momento no usaré esta función
    timer++;
    if(timer > t) {
        func();
        timer = 0;
    }
}

function draw() {
    stroke(255);
    fill(170);
    strokeWeight(1);
    rectMode(CENTER);
    background(51);
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].show();
    }
    for (let i = 0; i < circles.length; i++) {
        circles[i].show();
        if(circles[i].isOffScreen()) {
            circles[i].removeFromWorld();
            circles.splice(i, 1);
            i--;
        }
    }
    for (let i = 0; i < boundaries.length; i++) {
        boundaries[i].show();
    }
    for (let i = 0; i < circles.length; i++) {
        if(i != circles.length - 1)
            line(circles[i].body.position.x, circles[i].body.position.y, circles[i + 1].body.position.x, circles[i + 1].body.position.y);
    }
    console.log(circles.length, world.bodies.length);
}