//const { Constraint } = require("matter-js");

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

    //var p2 = new Ellipse(250, 40, 10);
    /* circles.push(p2);

    var options = {
        bodyA: p1.body,
        bodyB: p2.body,
        lenght: 50,
        stiffness: 0.4,
    }

    var constraint = Constraint.create(options);
    World.add(world, constraint); */
    
    //boundaries.push(new Boundary(0, height/2, 20, height, 0));

    //fill(150);
    //World.add(world, boundaries);
}

function createBox() {
    boundaries.push(new Boundary(width/2, height, width, 20, 0)); // Bottom
    boundaries.push(new Boundary(width/2, 0, width, 20, 0)); // Top
    boundaries.push(new Boundary(0, height/2, 20, height, 0)); // Left
    boundaries.push(new Boundary(width, height/2, 20, height, 0)); // Right
}

function mousePressed() {
    //circles.push(new Ellipse(mouseX, mouseY, random(10,15)));
}
function mouseDragged() {
    //circles.push(new Ellipse(mouseX, mouseY, random(10,15)));
}

let timer = 0;
function invoke(t, func) {
    timer++;
    if(timer > t) {
        func();
        timer = 0;
    }
}

function draw() {
    //invoke(4, () => circles.push(new Ellipse(350, 30, random(10,15))));

    background(51);
    //rect(0, 0, ground.h, ground.h);
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

    stroke(255);
    fill(170);
    strokeWeight(1);
    rectMode(CENTER);

    for (let i = 0; i < circles.length; i++) {
        if(i != circles.length - 1)
            line(circles[i].body.position.x, circles[i].body.position.y, circles[i + 1].body.position.x, circles[i + 1].body.position.y);
    }

    //line(200, height, width, 100);
    //rect(groud.position.x, groud.position.y, width, 100);
    console.log(circles.length, world.bodies.length);
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