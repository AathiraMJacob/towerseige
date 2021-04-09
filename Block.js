class Block extends BaseClass{
    constructor(x, y, width, height) {
        super(x,y,width,height);
        this.visibility=255;
        
      }
      display(){
        
      if (this.body.speed<5){
        super.display();
      }
      else{
        World.remove(world,this.body);
        push()
        this.visiblity=this.visibility-2;
        tint(255,this.visiblity);
        image(this.image,this.body,position.x,this.body.position.y,50,50);
        pop();
      }

      }
}