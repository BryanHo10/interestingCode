var grid=[];
var w=32;
var cellVisit=[];
var current;

function setup(){
    var cnv=createCanvas(800,800);
    cnv.position((windowWidth-width)/2,(windowHeight-height)/2);
    background(0);
    for(var x=0;x<w;x++){
        grid[x]=[];
        for(var y=0;y<w;y++){
            grid[x][y]=new Cell(x,y,floor(width/w));
        }
    }
    current=grid[0][0];
    cellVisit.push(current);    


}

function draw(){
    for(var i=0;i<grid.length;i++){
        for(var j=0;j<grid[0].length;j++)
            {
                grid[i][j].show();
            }
    }

    current.visited=true;
    current.checkNeighbors();    
    if(current.neighbors.length>0){
        var r=floor(random(0,current.neighbors.length));

        current.show();
        console.log(current);
        current=current.nextCell(current.neighbors[r]);
        cellVisit.push(current);
    }
    else{
        cellVisit.pop();
        current=cellVisit[cellVisit.length-1];
        
    }
    console.log(current);
    push();
    noStroke();
    fill(255,0,0);
    rect(current.x*current.w+2,current.y*current.w+2,current.w-3,current.w-3);
    pop();
}