class ground{
  constructor(x,y,w,h){
    var options={
      isStatic:true,
      'air-friction':1,
      'friction':1,
      'density':3,
       collisionFilter: { 
        //  category: 0x001, 
        //  mask: 0xFFFFFFFF, 
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
    // translate(0,0)
    fill('white')
    rectMode(CENTER)
    rect(pos.x,pos.y,this.w, this.h)
    pop()
  }
}