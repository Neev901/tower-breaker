class tower{
  constructor(x,y,w,h){
    var options={
      isStatic:false,
      'friction':0.75,
      'density':3,
      collisionFilter: { 
        // category: 0x0001, 
        // mask: 0xFFFFFFFF, 
        group: 1 }
    }
    this.x = x
    this.y = y
    this.w = w
    this.h = h    
    this.body = Bodies.rectangle(this.x, this.y, this.w, this.h, options)
    World.add(world, this.body)
  }
  display(){
    var pos = this.body.position
    push()
    translate(0,0)
    rotate(this.body.angle)
    fill('yellow')
    stroke('blue')
    rectMode(CENTER)
    rect(pos.x,pos.y,this.w, this.h)
    pop()
  }
}