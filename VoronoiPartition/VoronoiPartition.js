var sites=[]; //center of bubbles
//var slider;
var sizeOf=251;
function setup()
{
    createCanvas(screen.width-50,400);
    //slider=createSlider(0,500,10)
    colorMode(HSB);
    var protection=0;
    while(sites.length<=sizeOf)
        {

            var p=new Particle(random(-50,width+50),random(-40,height+40),floor(random(255)));
            var overlapping=false;
            for(var j=0;j<sites.length;j++)
                {
                    var other=sites[j];
                    
                    var d=dist(p.pos.x,p.pos.y,other.pos.x,other.pos.y);
                    if(d<other.getRadius()+p.getRadius()+sizeOf/10)
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
        for(var x=0;x<=width;x++)
        {
            for(var y=0;y<=height;y++)
                {
                    var min=sites[0].findDistance(x,y);
                    var index=0;
                    for(var i=0;i<sites.length;i++)
                        {
                            if(sites[i].findDistance(x,y)<=min)
                                {
                                    min=sites[i].findDistance(x,y);
                                    index=i;
                                }
                        }
                    stroke(sites[index].hu,50,255,255);
                    point(x,y);
                }
        }                     //COLOR FILL
    
//    for(var x=0;x<=width;x++)
//        {
//            for(var y=0;y<=height;y++)
//                {
//                   
//                }
//            
//        }
//    
    
}
function draw()
{
    for(var i=0;i<sites.length;i++)
         {
         sites[i].show();
         }
   
}
