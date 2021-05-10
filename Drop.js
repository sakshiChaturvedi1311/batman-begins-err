class Drops{

    constructor(x,y){

        var options={
            'isStatic': false,
            'restitution':0.1,
            'friction':0.001
        }

        this.body=Bodies.circle(x,y,10,10,options);
        this.radius=10;
        World.add(world,this.body);
       
    }

    changePosition(){
        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)})
        }
    }

    display(){

    var pos=this.body.position;

   // push();
   // translate(pos.x,pos.y)
    ellipseMode(CENTER);
    strokeWeight(4);
    stroke("blue")
    fill("blue");
    ellipse(pos.x,pos.y,this.radius,this.radius);
   // pop();

    }

    
}