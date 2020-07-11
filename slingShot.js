class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
      //  this.catapult1 = loadImage("sprites/sling1.png");
      //  this.catapult2 = loadImage("sprites/sling2.png");
      //  this.catapult3 = loadImage("sprites/sling3.png");
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        push()
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            line(pointA.x,pointA.y,pointB.x,pointB.y)
           /*  if(pointA.x<100){
            strokeWeight(4);
            stroke(64, 40, 11);
            line(pointA.x-25, pointA.y, pointB.x-90 , pointB.y-55);
            line(pointA.x-25,pointA.y,pointB.x-50,pointB.y-55);
            image(this.catapult3,pointA.x-25,pointA.y-10,15,20);
            }else{
                line(pointA.x+25, pointA.y, pointB.x-90 , pointB.y-55);
                line(pointA.x+25,pointA.y,pointB.x-50,pointB.y-55);
                image(this.catapult3,pointA.x+25,pointA.y-10,15,20);   
            } */
        }
       // image(this.catapult1,120,25);
       // image(this.catapult2,95,25);
        pop()
    }
    
}