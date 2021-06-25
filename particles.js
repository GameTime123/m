class particle
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0,
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(x, y, r, options)
        this.color = color(random(0,225),random(0,225),random(0,225))
		World.add(world, this.body);

	}
	display()
	{
			var stonepos=this.body.position;	
            var ant = this.body.angle	
			push()
			translate(stonepos.x, stonepos.y);
			 rotate(this.body.angle)
             fill(this.color)
	ellipseMode(RADIUS);
			ellipseMode(RADIUS)
		ellipse( 0,0,this.r, this.r)
			pop()
			
	}

}