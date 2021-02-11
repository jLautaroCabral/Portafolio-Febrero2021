// module aliases
var Engine = Matter.Engine,
    //Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Constraint = Matter.Constraint,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse;

var engine;
var world;
var particles = [];

function setup() {
    createCanvas(600, 400);
    engine = Engine.create();
    world = engine.world;

    var p = new Ellipse(300, 50);
    particles.push(p);
}

function draw() {
    background(111)
}