var coinImg,SofiaImg,stoneImg,treeImg,backgroundImg,gameOverImg,restartImg;
var Sofia;
var bg;
var stoneGrp;
var treeGroup;
var coinGroup;
var gameStates="play";
var gameOver;
var restart;
var distance, CoinCount;

function preload(){
  coinImg=loadImage("Images/coinImg.png");
  SofiaImg=loadImage("Images/SofiaImg.png");
  stoneImg=loadImage("Images/stoneImg.png");
  treeImg=loadImage("Images/treeImg.png");
  backgroundImg=loadImage("Images/backgroundImg.jpg");
  gameOverImg=loadImage("Images/gameOver.png");
  restartImg=loadImage("Images/restartImg (1).png");
}

function setup(){
  createCanvas(800,600);

  distance=0;
  CoinCount=0;

  bg=createSprite(width,100,width,height);
  bg.addImage(backgroundImg);
  bg.x=bg.width+1000;
  bg.velocityX=-2;
  bg.scale=10;

  Sofia=createSprite(150,550);
  Sofia.addImage(SofiaImg);
  Sofia.scale=0.5;

gameOver=createSprite(400,300);
  gameOver.addImage(gameOverImg);
  gameOver.scale=0.5;

  restart=createSprite(400,350);
  restart.addImage(restartImg);
  restart.scale=0.5;

  stoneGrp=new Group();
  treeGroup=new Group();
  coinGroup=new Group();
}

function draw(){
  background(0);

  if(gameStates === "play"){
    gameOver.visible=false;
    restart.visible=false;
  

  if(bg.x <20){
     bg.x=bg.width+1000; 
    }
    stones();
    trees();
    coins();

    if(keyDown("space") && Sofia.y >= 100) {
      Sofia.y=Sofia.y-20;
  }

}

  if(gameStates === "end"){
    gameOver.visible=true;
    restart.visible=true;
    if(mousePressedOver(restart)){
      reset();
    }
  
drawSprites();

textSize(20);
fill("red");
text("Distance travelled :"+ distance,700,50);
text("Coins earned:"+ count,700,80);
}

  function reset(){

  }

}

function stones(){
  if(frameCount % 120 === 0){
    var stone=createSprite(800,580);
    stone.addImage(stoneImg);
    stone.velocityX=-4;
    stone.scale=0.2;
    stone.lifetime=800;
    stoneGrp.add(stone);
    Sofia.depth=stone.depth;
    Sofia.depth=Sofia.depth+1;
}
}

function trees(){
  if(frameCount % 200 === 0){
    var tree=createSprite(800,560);
    tree.addImage(treeImg);
   tree.velocityX=-4;
    tree.scale=0.6;
    tree.lifetime=800;
    treeGroup.add(tree);
    Sofia.depth=tree.depth;
    Sofia.depth=Sofia.depth+1;
}
}

function coins(){
  if(frameCount % 300 === 0){
    var coin=createSprite(800,400);
    coin.addImage(coinImg);
   coin.velocityX=-4;
    coin.scale=0.2;
    coin.lifetime=800;
    coinGroup.add(coin);
    Sofia.depth=coin.depth;
    Sofia.depth=Sofia.depth+1;
}
}