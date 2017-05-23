function Chip(x,y,user)
{
    if(user==1)
        this.hue=255;
    else if(user==2)
        this.hue=0;
    this.hue=150;
    this.x=x;
    this.y=y;
    this.show=function()
    {
        stroke(0);
        fill(this.hue,150,150);
        rect(this.x,this.y,50,50);
    }
}
