function Box(x, y, w, h) {
    this.body = Bodies.rectangle(x, y, w, h);
    World.add(world, this.body);
    
    this.w = w;
    this.h = h;

    this.show = function() {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rect(0, 0, this.w, this.h);
        pop();
    }
}