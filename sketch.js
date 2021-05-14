var backgroundImage;

var cat, catImg1, catImg2;

var mouse, mouseImg1, mouseImg2;


function preload() {
   
    backgroundImage = loadImage("images/garden.png");

    catImg1 = loadAnimation("images/cat1.png");
    mouseImg1 = loadAnimation("images/mouse1.png");
    catImg2 = loadAnimation("images/cat2.png", "images/cat3.png");
    mouseImg2 = loadAnimation("images/mouse2.png", "images/mouse3.png");
    catImg3 = loadAnimation("images/cat4.png");
    mouseImg3 = loadAnimation("images/mouse4.png");
   
}

function setup(){
    createCanvas(1000,800);
    
    cat = createSprite(800,600);
    cat.addAnimation("images/cat1.png", catImg1);
    cat.scale = 0.2;
            
    mouse = createSprite(200,600,30,30);
    mouse.addAnimation("images/mouse1.png", mouseImg1);
    mouse.scale = 0.15;
    

}

function draw() {

    background(backgroundImage);
    

    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x < (cat.width - mouse.width)/2)
    {
        cat.velocityX = 0;

        mouse.addAnimation("happyMouse", mouseImg3);
        mouse.changeAnimation("happyMouse");

        cat.addAnimation("happyCat", catImg3);
        cat.changeAnimation("happyCat");

    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === LEFT_ARROW)
  {
      cat.velocityX = -2;
      cat.addAnimation("movingCat", catImg2);
      cat.changeAnimation("movingCat");

      mouse.addAnimation("mouseTeasing", mouseImg2);
      mouse.changeAnimation("mouseTeasing");
      mouse.frameDelay = 25;

  }

  
}
