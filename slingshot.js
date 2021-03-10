class Slingshot{
    constructor(bodyA,pointB){
      
        var options={
            bodyA: bodyA ,
            pointB:pointB , 
            length: 200,
            stiffness: 0.007
        };
        
        this.slingshot=Constraint.create(options);
        this.pointB=pointB
        World.add(world,this.slingshot);
    }
     fly() {
         this.slingshot.bodyA=null;
     }
     attach(body){
        this.slingshot.bodyA=body;
      }
   show(){
       if(this.slingshot.bodyA){
   var pointA=this.slingshot.bodyA.position;
   var pointB=this.pointB;
       
   strokeWeight(4)
   stroke(70,40,30)
   
   line(pointA.x,pointA.y,pointB.x,pointB.y)
   
       }
       
   }
   
   
   
   }