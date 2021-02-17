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
var plinkos = [];
var cols = 5;
var rows = 5;
//let p;
function setup() {
    createCanvas(600, 400);
    engine = Engine.create();
    world = engine.world;

    //p = new Particle(300, 50, 10);
    //particles.push(p);

    let spacing = width / cols;
    
    for (let j = 0; j < rows; j++) {

        console.log(spacing + "; " + rows);

        for (var i = 0; i < cols; i++) {
            plinkos.push(new Plink(i * spacing, j * spacing, 10));
        }
    }
}

function draw() {
    if(frameCount % 10 == 0) {
        particles.push(new Particle(300, 50, 10));
    }

    Engine.update(engine);
    background(111)
    for (let i = 0; i < particles.length; i++) {
        particles[i].show();
    }
    for (let i = 0; i < plinkos.length; i++) {
        plinkos[i].show();
    }
}