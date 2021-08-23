var playerrunning,pathImg,Runner1,path,invisible_left,invisible_right ;

function preload(){
 playerrunning=loadAnimation("Runner-1.png","Runner-2.png")
 pathImg=loadImage("path.png")
 
}


function setup(){
  createCanvas(400,400);
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = -4;
  path.scale=1.2;
  Runner1=createSprite(200,320);
  Runner1.addAnimation("playerrunning",playerrunning)
  Runner1.scale=0.2;
  invisible_left=createSprite(0,200,20,400)
  invisible_right=createSprite(400,200,20,400)
}



function draw() {
  background(0);
  if (path.y <0){
    path.y = height/2; 
    
    }
    Runner1.collide(invisible_left);
    Runner1.collide(invisible_right);
    Runner1.x=mouseX;
    drawSprites();
}


