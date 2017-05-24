
var game;
function setup()
{
    colorMode(HSB);
    createCanvas(350,300);
    background(255);
    game=new Bucket(width,height);
    game.setUpBoard();
    var button=createButton('Reset Game');
    button.size(248,48);
    button.position(75,350);
    button.mousePressed(resetGame);
    
}
function draw()
{
    game.showBoard();
    if(mouseX>=0&&mouseX<=width&&mouseY>=0&&mouseY<=height)
        game.checkMouseLocation(mouseX,mouseY);
    
}
function mouseClicked()
{
  console.log("done");  if(mouseX>=0&&mouseX<=width&&mouseY>=0&&mouseY<=height)
        game.insertChip();
}
function resetGame()
{
    game.setUpBoard();
}