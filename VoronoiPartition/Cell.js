function Particle(x,y,r){
    
    this.pos=createVector(x,y);
    this.vel=createVector(0,0);
    this.acc=createVector(0,0);
    this.r=r;
    
    this.show = function(){
        stroke(151,51);
        ellipse(this.pos.x,this.pos.y,this.r,this.r);
    }
    this.update=function(){

        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
        
    }
    this.getRadius=function()
    {
        return this.r;
    }
    this.setRadius=function(nrad)
    {
        this.r=nrad;
    }

    this.applyForce=function(force){
        
        this.acc.add(force);
    }
}