class Ball{
    constructor(){
        var options ={
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.circle(200,100,20,options);
        this.x= 200;
        this.y= 100;
        this.r = 20;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position
        ellipseMode(RADIUS);
        fill("white");
        ellipse(pos.x,pos.y,20,20);
    }
}