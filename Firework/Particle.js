function Particle(x,y,hu,exploder){
    
    this.pos=createVector(x,y);
    this.exploder=exploder;
    this.lifespan=255;
    this.hu=hu;
    if(this.exploder)
    this.vel=createVector(0,random(-8,-12));
    else{
        this.vel=p5.Vector.random2D();
        this.vel.mult(random(2,10));
    }
    this.acc=createVector(0,0);
    
    this.show = function(){
        colorMode(HSB);
        if(!this.exploder)
             stroke(this.hu,50,255,this.lifespan);
      else
            stroke(this.hu,50,255,255);
        point(this.pos.x,this.pos.y);
    }
    this.update=function(){
        if(!this.exploder){
            this.vel.mult(0.85);
            this.lifespan-=8;
        }
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
        
    }
    this.done=function()
    {
        if(this.lifespan<0)
            return true;
        else
            return false;
    }
    this.applyForce=function(force){

        this.acc.add(force);
    }
}