function Particle(x,y,hu){
    
    this.pos=createVector(x,y);
    this.r=2;
    this.hu=hu;
    colorMode(HSB);
    this.show = function(){
        stroke(0);
        fill(0);
        ellipse(this.pos.x,this.pos.y,this.r,this.r);
        //createBorder()
    }
    
    this.getRadius=function()
    {
        return this.r;
    }
    
    this.getHue=function()
    {
        return this.hu;    
    }
    
    this.findDistance=function(x,y)
    {

        var d=dist(x,y,this.pos.x,this.pos.y);        //Euclidian 
       // var d=abs(x-this.pos.x)+abs(y-this.pos.y);      //Manhattan 
        return d;
    }
    
}