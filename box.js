class Box {
    constructor(x,y,width,height) {
        var body_options ={
            restitution: 0.5,
            density: 0.8,
            friction: 1.0
        }
    
        this.body = Bodies.rectangle(x,y,width,height,body_options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display() {
        var pos = this.body.position
        var ang = this.body.angle
        push();
        translate(pos.x,pos.y);
        rotate(ang);
        rectMode(CENTER);
        stroke("green");
        strokeWeight(7);
        fill("pink");
        rect(0,0,this.width,this.height);
        pop();
    }
}