function Ellipse(x, y, r) {
    let options = {
        friction: 0.3,
        restitution: 0.6,
    }

    this.body = Bodies.circle(x, y, r, options);
    
    World.add(world, this.body);
    
    this.r = r;

    this.show = function() {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(1);
        stroke(255);
        fill(127);
        ellipse(0, 0, r * 2);
        pop();
    }
}