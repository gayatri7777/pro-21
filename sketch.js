var hero,path;
   var  heroImg,pathImg;

var distance = 0;
 
var hornsound,endSound;
var restartImg,gameOverImg;
var oponent1G,oponent2G,oponent3G,oponent4G;
var oponent1Img,oponent2Img,oponent3Img,oponent4Img;
var creshImg;
var gameOver,restart;
var gameState = 1;
var PLAY = 1;
var END ;


function preload (){
heroImg = loadImage("hero.png");
pathImg = loadImage("Road.png");
oponent1Img = loadImage("oponent1.png");
oponent2Img = loadImage("oponent2.png");
oponent3Img = loadImage("oponent3.png");
oponent4Img = loadImage("oponent4.png");
creshImg = loadImage("cresh1.png");

restartImg = loadImage("restart.png");
gameOverImg = loadImage("gameOver.png");
  
hornsound = loadSound("horn.mp3");
endSound = loadSound("end.mp3");
}


function setup (){
    createCanvas(windowWidth,windowHeight);

path = createSprite(width/2,height-120);
path.addImage(pathImg);
path.scale = 1.5;
path.velocityY = 8;
hero = createSprite(width-250,height-60,10,10);
hero.addImage(heroImg);
hero.scale = 0.1;

  gameOver = createSprite(width/2,height-300,10,10);
gameOver.addImage(gameOverImg);
gameOver.scale = 0.4;

 restart = createSprite(width/2,height-200,10,10);
restart.addImage(restartImg);
restart.scale = 0.1;

oponent1G = createGroup();
oponent2G = createGroup();
oponent3G = createGroup();
oponent4G = createGroup();


}


function draw (){
  if (gameState === PLAY){
    
background(180);
    gameOver.visible = false;
    restart.visible = false;
   path.velocityY=(8+3* distance/100);
   distance =  distance+ Math.round(getFrameRate()/60);
    
   if (path.y > height){
    path.y = height/2;
   }
   if (keyDown("right")){
    hero.velocityX = 2;
 }
  if (keyDown("left")){
    hero.velocityX = -2;
  }
  if (keyDown("up")){
    hero.y = hero.y-2;
  }
  if (keyDown("down")){
    hero.y = hero.y+2;
  }
  if (keyDown("space")){
    hornsound.play();
  }
  
  hero.setCollider("rectangle",0,0,10,10);
  hero.debug = false;
  if  (oponent1G.isTouching(hero)){
    hero.addImage(creshImg);
    oponent1G.setVelocityEach();
    gameState = END;
    
    endSound.play();
   }
   else if (oponent2G.isTouching(hero)){
    hero.addImage(creshImg);
    oponent2G.setVelocityEach();
    gameState = END;
  
    endSound.play();
   }
   else if (oponent3G.isTouching(hero)){
    hero.addImage(creshImg);
    oponent3G.setVelocityEach();
    gameState = END;
    
    endSound.play();
   }
   else if (oponent4G.isTouching(hero)){
    hero.addImage(creshImg);
    oponent4G.setVelocityEach();
    gameState = END;
    
    endSound.play();
   }
  }


  createoponent1();
  createoponent2();
  createoponent3();
  createoponent4();
  if (gameState === END){
    hero.velocityX = 0;
    path.velocityY = 0;
  oponent1G.setLifetimeEach(-1);
  oponent2G.setLifetimeEach(-1);
  oponent3G.setLifetimeEach(-1);
  oponent4G.setLifetimeEach(-1);
  gameOver.visible = true;
  restart.visible = true;
  
  }
  
  if (mousePressedOver(restart)){
    reset();
  }
drawSprites();
fill (224);
   textSize(20);
    text("Distance:"+distance,width-150,height-50);

}



function reset(){
  gameState = PLAY;
  gameOver.visible = false;
  restart.visible = false; 
  hero.addImage(heroImg);
  oponent1G.destroyEach();
  oponent2G.destroyEach();
  oponent3G.destroyEach();
  oponent4G.destroyEach();

  distance = 0;
}

function createoponent1(){
    if (World.frameCount % 200 == 0){
      var oponent1 = createSprite(Math.round(random(width-50,height-350),40,10,10));
      oponent1.addImage(oponent1Img);
      oponent1.scale = 0.1;
      oponent1.velocityY = 4;
      oponent1.lifetime = 200;
      oponent1G.add(oponent1);
    }
   }
  function createoponent2(){
    if (World.frameCount % 320 == 0){
      var oponent2 = createSprite(Math.round(random(width-50,height-350),40,10,10));
      oponent2.addImage(oponent2Img);
      oponent2.scale = 0.02;
      oponent2.velocityY = 4;
      oponent2.lifetime = 200;
      oponent2G.add(oponent2);
    }
  }
  function createoponent3(){
    if (World.frameCount % 410 == 0){
      var oponent3 = createSprite(Math.round(random(width-50,height-350),40,10,10));
      oponent3.addImage(oponent3Img);
      oponent3.scale = 0.1;
      oponent3.velocityY = 4;
      oponent3.lifetime = 200;
      oponent3G.add(oponent3);
    }
    
  }
  function createoponent4(){
    if (World.frameCount % 530 == 0){
      var oponent4 = createSprite(Math.round(random(width-50,height-350),40,10,10));
      oponent4.addImage(oponent4Img);
      oponent4.scale = 0.1;
      oponent4.velocityY = 4;
      oponent4.lifetime = 200;
      oponent4G.add(oponent4);
    }
  }
  




