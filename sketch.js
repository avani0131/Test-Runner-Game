var bg, bgImg
var bottomGround
var topGround
var runner,runnerImg
var score
var mud, water, hurdle, twoXS, hurdleImg, twoXImg, restartImg, mudImg, waterImg
var mudG, waterG, hurdleG, twoXG

function preload(){
bgImg = loadImage("assets/Cloud.jpeg")
roadImg = loadImage("assets/Road.png")
runnerImg = loadImage("assets/Runner.png")
mudImg = loadImage("assets/Mud.png")
waterImg = loadImage("assets/Water Bottle.png")
hurdleImg = loadImage("assets/Hudle.png")
twoXImg = loadImage("assets/2x.png")
restartImg = loadImage("assets/Restart.png")


}

function setup(){
createCanvas(1200,600)

road = createSprite(100,300);
road.addImage(roadImg);
road.scale = 0.5;
road.velocityX = -2;

bottomGround = createSprite(200,600,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;

//create runner
runner = createSprite(170,140,10,10);
runner.addImage(runnerImg);
runner.scale = 0.5;

mudG = createGroup();
waterG = createGroup();
hurdleG = createGroup();
twoXG = createGroup();


}

function draw() {
background("blue");
text("Score: "+ score, 1200,50);

if(keyDown("space")&& runner.y >= 100) {
  runner.velocityY = -17;
}
runner.velocityY = runner.velocityY + 0.7
score = score + Math.round(frameCount/60);       
if(road.x < 0 ){
  road.x = width/2;
}

runner.collide(bottomGround)


var count = Math.round(random(1,4));
if(frameCount % 120 === 0)
{
  if(count === 1)
  {
    mudPuddle();
  }
  else if(count === 2)
  {
    waterBottle();
  }
  else if(count === 3)
  {
    hurdles();
  }
  else
  {
    twoXS();
  }
}
drawSprites();  
}




function mudPuddle(){
  mud =createSprite(1200,Math.round(random(50, 250)));
  mud.scale =0.3;
  mud.velocityX = -(6 + 2*score/150);
  mud.addImage(mudImg);
  mud.setLifetime=170;
  mudG.add(mud);
}

function waterBottle(){
    water=createSprite(1100,Math.round(random(50, 250)));
    water.scale =0.04;
    water.velocityX = -(6 + 2*score/150);
    water.addImage(waterImg);
    water.setLifetime=170;
    waterG.add(water);
  }

function hurdles(){
      hurdle =createSprite(1100,Math.round(random(50, 250)));
      hurdle.scale =0.4;
      hurdle.velocityX = -(6 + 2*score/150);
      hurdle.addImage(hurdleImg);
      hurdle.setLifetime=170;
      hurdleG.add(hurdle);
}

function twoXS(){
      twoX =createSprite(1100,Math.round(random(50, 250)));
      twoX.scale =0.1;
      twoX.velocityX = -(6 + 2*score/150);
      twoX.addImage(twoXImg);
      twoX.setLifetime=170;
      twoXG.add(twoX);
}

/*
function spawnObstacle(){
  if (frameCount % 240 === 0){
    var obstacle = createSprite(600,200,10,40);
    obstacle.y = Math.round(random(350,560))
    obstacle.velocityX = -1;
    
     //generate random obstacles
     var rand = Math.round(random(1,2));
     switch(rand) {
       case 1: obstacle.addImage(mudImg);
               obstacle.scale = 0.3;
               break;
       case 2: obstacle.addImage(hurdleImg);
               obstacle.scale = 0.4;
               break;
       default: break;
     }
    
     //assign lifetime to the obstacle           
     obstacle.lifetime = 500;
    
    //add each obstacle to the group
     obstaclesGroup.add(obstacle);
  }
 }

 function spawnBooster()
 {
  if (frameCount % 140 === 0)
  {
    var booster = createSprite(600,200,10,40);
    booster.y = Math.round(random(350,560))
    booster.velocityX = -1;
    
     //generate random boosters
      var rand = Math.round(random(1,2));
      switch(rand) {
        case 1: booster.addImage(twoXImg);
                booster.scale = 0.1;
                break;
        case 2: booster.addImage(waterImg);
                booster.scale = 0.04
                break;
        default: break;
      }
      
     //assign lifetime to the obstacle           
     booster.lifetime = 500;
    
    //add each booster to the group
     boosterGroup.add(booster);
  }
}
*/
  