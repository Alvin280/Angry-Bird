class Log extends Baseclass {
    constructor(x, y, height, angle) {
    super(x,y,10,height,angle)
      Matter.Body.setAngle(this.body, angle);
      this.image=loadImage("sprites/wood2.png");
    }
  };
  