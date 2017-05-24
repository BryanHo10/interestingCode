function Chip(x,y,user)
{
    this.user=0;
    this.hue=100;
    this.x=x;
    this.y=y;
    this.BRT=150;
    this.show=function()
    {
        stroke(0);
        fill(this.hue,50,90);
        rect(this.x,this.y,50,50);
    }
    this.highlightCol=function()
    {
        stroke(0);
        fill(this.hue,40,140);
        rect(this.x,this.y,50,50);
    }
    this.changeUser=function(num)
    {
        this.user=num;
        if(this.user==1)
            this.hue=255;
        else if(this.user==2)
            this.hue=0;
    }
    
   
}
