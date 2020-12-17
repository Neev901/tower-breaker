class Ball{
  constructor(x,y,r){
    var options={
      isStatic: false,
      'density':1,
      'friction':0.5
    }
    this.x = x
    this.y = y
    this.r = r
    this.body = Bodies.circle(this.x, this.y, this.r, options)
    World.add(world, this.body)
  }
  display(){
    var pos = this.body.position
    push();
    translate(0,0)
    fill("red")
    ellipseMode(CENTER)
    ellipse(pos.x, pos.y, this.r, this.r)
    pop(); 

  }
}