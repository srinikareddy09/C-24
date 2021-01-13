class Log {
    constructor(x,y,width,height,angle) {
        var body_options ={
            restitution: 0.5,
            density: 0.8,
            friction: 1.0
        }
    
        this.body = Bodies.rectangle(x,y,width,height,body_options);
        this.width = width;
        this.height = height;

        Matter.Body.setAngle(this.body,angle)
        World.add(world,this.body);
    }
    display() {
        var pos = this.body.position
        var ang = this.body.angle
        push();
        translate(pos.x,pos.y);
        rotate(ang);
        rectMode(CENTER);
        stroke("red");
        strokeWeight(4);
        fill("yellow");
        rect(0,0,this.width,this.height);
        pop();
    }
}