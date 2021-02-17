function Plink(x, y, r) {
    this.body = Bodies.circle(x, y, r, {isStatic: true});
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
    fill(255);
    stroke(255);
    let pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    ellipse(0, 0, this.r * 2);
    pop();
}