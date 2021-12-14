class Ball {
    constructor(x, y, radius){
        var options = {
            density:1, 
            frictionAir:0.01
        } 

        this.body = Bodies.rectangle(x, y, radius, radius, options);
        this.radius = radius;
        World.add(world, this.body);
    }

    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipse(0, 0, this.radius, this.radius);
        pop();
    }
}