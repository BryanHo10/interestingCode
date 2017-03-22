var sites=[]; //center of bubbles
var overlapping=false;
var slider;
function setup()
{
    createCanvas(screen.width-50,400);
    slider=createSlider(0,250,10)
    var protection=0;
    while(sites.length<=100)
        {
            var p=new Particle(random(width),random(height),slider.value());
            for(var j=0;j<sites.length;j++)
                {
                    var other=sites[j];
                    
                    var d=dist(p.pos.x,p.pos.y,other.pos.x,other.pos.y);
                    if(d<other.getRadius()+p.getRadius())
                        {
                        overlapping=true;
                            break;
                        }
                    
                }
            if(!overlapping)
                        sites.push(p);
            protection++;
            if(protection>50000)
                break;
        }
    
    background(51);
    
}
function draw()
{
    background(51);
    for(var i=0;i<sites.length;i++){
        sites[i].setRadius(slider.value());
        sites[i].update();
        sites[i].show();
    }
   
}