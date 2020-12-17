class constraint{
  constructor(body, anchor){
    var options={
      bodyA: body,
      pointB: anchor,
      stiffness:0.003,
      length:12
    }
    this.bodyA = body
    this.pointB = anchor
    this.string = Constraint.create(options)
    World.add(world, this.string)
  }
  display(){
  var pointA = this.bodyA.position;
  var pointB = this.pointB
  strokeWeight(4)
  stroke('red')
  line(pointA.x,pointA.y, pointB.x, pointB.y)
  }
}