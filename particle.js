function Particle(x, y, r) {
    this.body = Bodies.circle(x,y,r);
    this.r = r;
    World.add(world, this.body);
}

Particle.prototype.show = function () {
    fill(255);
    stroke(255);
    let pos = this.body.position;
    tranlate(pos.x, pos.y);
    ellipse(0, 0, this.r * 2);
}