class Monster{
    constructor(x,y,w,h)
	{
		var options={
			
			restitution :0,
            friction :1,
            airFriction:1
			}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.image= loadImage("Monster-01.png")
		this.body=Bodies.rectangle(this.x, this.y, this.w,this.h, options)
		World.add(world, this.body);
		
	}

	display()
	{
		var mangoPos=this.body.position;	
		
		
		push()
		translate(mangoPos.x, mangoPos.y);
		//fill(0)
		imageMode(CENTER);
		ellipseMode(CENTER);
		image(this.image,0,0,this.w,this.h)
		pop()
 }
}