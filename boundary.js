function Boundary(x, y, w, h, angle) {
    let options = {
        friction: 0.3,
        restitution: 0.6,
        isStatic: true,
        angle: angle
    }

    this.body = Bodies.rectangle(x, y, w, h, options);
    
    World.add(world, this.body);
    
    this.w = w;
    this.h = h;

    this.show = function() {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(5);
        stroke(255);
        fill(0);
        rect(0, 0, this.w, this.h);
        pop();
    }
}