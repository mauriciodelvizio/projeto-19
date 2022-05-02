
var ghost, ghostImg;
var gameState = "play"
var edges;
var tower;
var rock;
var rockImg;

function preload(){

ghostImg = loadImage("ghost.png");
towerImg = loadImage("tower.png");
rockImg = loadImage("rock.png");


}

function setup() {
    createCanvas(600, 600);

    tower = createSprite(300,300);
    tower.addImage("tower",towerImg);
    tower.velocityY = 1;

    edges = createEdgeSprites(); 
  
    rocksGroup = new Group();
  
    ghost = createSprite(300, 100);
    ghost.addImage("ghost", ghostImg);
    ghost.scale = 0.4;
    ghost.setCollider("rectangle", 0, 0, 150, 195);
  
  
    
  }
  
  function draw() {
    background("black");
    drawSprites();
    createRocks();
    if(gameState == "play"){
  
      rocksGroup.setVelocityYEach(1);

      if(tower.y > 400){
        tower.y = 300
      }
      if(ghost.y > 600 || ghost.isTouching(rocksGroup)){
        gameState = "end";
      }
      ghost.bounceOff(edges[0]);
      ghost.bounceOff(edges[1]);
      ghost.bounceOff(edges[2]);

  
      ghost.velocityY = ghost.velocityY + 1;
  
      if(keyDown("up_arrow")){
        ghost.velocityY = -10;
      }
      if(keyDown("left_arrow")){
        ghost.x = ghost.x -10;
      }
      if(keyDown("right_arrow")){
        ghost.x = ghost.x +10;
      }
  
  
    }
    if(gameState == "end"){
      background("black");
      ghost.velocityY = 0;
      ghost.velocityX = 0;
      rocksGroup.setVelocityYEach(0);
      textSize(50);
      text("GAME OVER", 150, 300);
  
    }
  }
  function createRocks(){
    if(frameCount %100 === 0){
    rock = createSprite(50, 10);
    rock.x = Math.round(random(100, 500));
    rock.addImage("rockImg", rockImg);
    rock.scale = 0.4;
    rock.velocityY = 2;
    rock.setCollider("rectangle", 0, 0, 160, 95);
    rocksGroup.add(rock);
    }
  }
  

