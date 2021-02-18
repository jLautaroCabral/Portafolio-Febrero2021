function Plink(x, y, r) {
    let options = {
        restitution: 1,
        friction: 0,
        isStatic: true
    }
    this.body = Bodies.circle(x, y, r, options);
    World.add(world, this.body);
    this.r = r;

/*     this.show = function () {
        fill(255);
        stroke(255);
        let pos = this.body.position;
        tranlate(pos.x, pos.y);
        ellipse(0, 0, this.r * 2);
    } */
}

Plink.prototype.show = function () {
    fill('green');
    stroke(255);
    let pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    ellipse(0, 0, this.r * 2);
    pop();
}