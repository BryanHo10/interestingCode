var pieces=[];
var game;
function setup()
{
    colorMode(HSB);
    createCanvas(350,300);
    background(255);
    game=new Bucket();
    for(var i=0;i<width/50;i++)
        {
            for(var j=0;j<height/50;j++)
                {
                    pieces[i*height/50+j]=new Chip(i*50,j*50,0);
                }
        }
    
}
function draw()
{
    for(var i=0;i<pieces.length;i++)
        {
            pieces[i].show();
        }
}
