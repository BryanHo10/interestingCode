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
                while(!placed&&navig>=0)
                   {
                        if(this.pieces[navig].user==0)
                            {
                             this.pieces[navig].changeUser(this.first);
                                if(this.first==1)
                                    this.first=2;
                                else
                                    this.first=1;
                                placed=true;
                            }
                       else
                           navig-=this.x/50;
                        
                    }
        this.checkWin(navig);
    }
    this.checkWin=function(location)
    {
        if (this.checkHorizontal(location) > 0)
            {
                if(this.checkHorizontal(location)==1)
                    console.log("Blue user won");
                else
                    console.log("Red user won");
                    
            }
        if(this.checkVertical(location)>0)
             {
                if(this.checkVertical(location)==1)
                    console.log("Blue user won");
                else
                    console.log("Red user won");
                    
            }
        if(this.checkCrossRight(location)>0)
             {
                if(this.checkCrossRight(location)==1)
                    console.log("Blue user won");
                else
                    console.log("Red user won");
                    
            }
        if(this.checkCrossLeft(location)>0)
             {
                if(this.checkCrossLeft(location)==1)
                    console.log("Blue user won");
                else
                    console.log("Red user won");
                    
            }
        
    }
     //Breadth First Search
    this.checkCrossLeft=function(location)
    {
        var count = 8;
                var matched = 1;
                while (count < 32 && matched != 4)
                    {
                        if(this.pieces[location-count]==null)
                            break;
                        else if (this.pieces[location].user == this.pieces [location - (count)].user && (location - count) % 7 != 0 )
                            {
                                matched++;
                            }
                        else
                            {
                                break;
                            }
                        count+=8;
                    }
                count = 8;
                while (count < 32 && matched != 4)
                    {
                        if(this.pieces[location+ count]==null)
                            break;
                        else if (this.pieces[location].user == this.pieces [location + (count)].user && (location + count) % 7 != 6 )
                            {
                                matched++;
                            }
                        else
                            {
                                break;
                            }
                        count+=8;
                    }
        if (matched == 4)
            return this.pieces[location].user;
        else
            return -1;
    }
    this.checkCrossRight=function(location)
    {
            
        var count = 6;
        var matched = 1;
        
        while (count < 24 && matched != 4) 
                    {
                        if(this.pieces[location+count]==null)
                            break;
                        else if (this.pieces[location].user == this.pieces [location + (count)].user && (location + count) % 7 != 0 )
                            {
                                matched++;
                            }
                        else
                            {
                                break;
                            }
                        count+= 6;
                    }
        count = 6;
        while (count < 24 && matched != 4) 
                    {
                        if(this.pieces[location-count]==null)
                            break;
                        else if (this.pieces[location].user == this.pieces [location - (count)].user && (location - count) % 7 != 6 )
                            {
                                matched++;
                            }
                        else
                            {
                                break;
                            }
                        count+= 6;
                    }
        if (matched == 4)
            return this.pieces[location].user;
        else
            return -1;
    }
    this.checkHorizontal=function(location)
    {
                var count = 1;
                var matched = 1;
                while (count < 4)
                    {
                        if(this.pieces[location+count]==null)
                            break;
                        else if (this.pieces[location].user == this.pieces [location + (count)].user && (location + count) % 7 != 0 )
                            {
                                matched++;
                            }
                        else
                            {
                                break;
                            }
                        count++;
                    }
                count = 1;
                while (count < 4 && matched != 4)
                    {
                        if(this.pieces[location-count]==null)
                            break;
                        else if (this.pieces[location].user == this.pieces [location - (count)].user && (location - count) % 7 != 6 )
                            {
                                matched++;
                            }
                        else
                            {
                                break;
                            }
                        count++;
                    }
        if (matched == 4)
            return this.pieces[location].user;
        else
            return -1;
        
    }
    this.checkVertical=function(location)
    {
        var count = 7;
                var matched = 1;
                while (count < 28 && matched != 4)
                    {
                        if(this.pieces[location+count]==null)
                            break;
                        else if (this.pieces[location].user == this.pieces [location + (count)].user)
                            {
                                matched++;
                            }
                        else
                            {
                                break;
                            }
                        count+=7;
                    }
        if (matched == 4)
            return this.pieces[location].user;
        else
            return -1;  
    }
}