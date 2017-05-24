function Bucket(x,y)
{
    this.pieces=[];
    this.x=x;
    this.y=y;
    this.user=0;
    this.first=floor(random(0,2)+1);
    this.setUpBoard=function()
    {
        for(var i=0;i<this.x/50;i++)
        {
            for(var j=0;j<this.y/50;j++)
                {
                    this.pieces[j*this.x/50+i]=new Chip(i*50,j*50,0);
                    
                }
        }
    }
    this.showBoard=function()
    {
    for(var i=0;i<this.pieces.length;i++)
        {
            this.pieces[i].show();
        }
    }
    this.checkMouseLocation=function(mX,mY)
    {
       var index=floor(mY/50)*floor(this.x/50)+floor(mX/50);
        var column=index%7;
        for(var i=0;i<this.pieces.length;i++)
            {
                if(i%7==column)
                    {
                        this.pieces[i].highlightCol();
                    }
                else
                    {
                        this.pieces[i].show();
                    }
            }

    }
    this.insertChip=function()
    {
                var placed=false;
                var navig=floor(this.y/50)*floor(this.x/50)+floor(mouseX/50)-floor(this.x/50);
            console.log(navig);
                while(!placed&&navig>=0)
                   {
                        if(this.pieces[navig].user==0)
                            {
                                console.log(this.first);
                                this.pieces[navig].changeUser(this.first);
                                if(this.first==1)
                                    this.first=2;
                                else
                                    this.first=1;
                                placed=true;
                            }
                       else
                           navig-=7;
                        
                    }
    }
}