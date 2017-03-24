var sites=[]; //center of bubbles
//var slider;
var sizeOf=151;
function setup()
{
    createCanvas(screen.width-50,400);
    //slider=createSlider(0,500,10)
    colorMode(HSB);

    pixelDensity(1);
    
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
    protection=0;
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

                            if(protection>5000000)
                                        break;

                        }
                    stroke(sites[index].hu,50,255,255);
                    point(x,y);
                    if(protection>5000000)
                                        break;
                }
            if(protection>5000000)
                                        break;
        }                     //COLOR FILL
        loadPixels();
    for(var x=0;x<=width;x++)
        {
            for(var y=0;y<=height;y++)
                {
                    var index1=(x+y*width)*4;
                    var index2=(x+y*width+1)*4;
                    var index3=(x+(y+1)*width)*4;
                    var pix1=pixels[index1]+pixels[index1+1]+pixels[index1+2]+pixels[index1+3];
                    var pix2=pixels[index2]+pixels[index2+1]+pixels[index2+2]+pixels[index2+3];
                    var pix3=pixels[index3]+pixels[index3+1]+pixels[index3+2]+pixels[index3+3];
                   if(pix1!=pix2||pix1!=pix3)
                       {
                           
                           pixels[index1]=0;
                           pixels[index1+1]=0;
                           pixels[index1+2]=0;
                       }

                }
            
        }
    updatePixels();
    
    
}
function draw()
{
//    for(var i=0;i<sites.length;i++)
//         {
//         sites[i].show();
//         }
   
}
