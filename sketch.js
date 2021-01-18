var tom, tomimage, tomimage2, tomimage3, tomimage4;
var jerry, jerryimage, jerryimage2, jerryimage3, jerryimage4;
var bg, bgimage;
var gameState = "start";

function preload() {
    //load the images here
    tomimage = loadImage("images/tomOne.png");
    tomimage2 = loadImage("images/tomTwo.png");
    tomimage3 = loadImage("images/tomThree.png");
    tomimage4 = loadImage("images/tomFour.png");

    jerryimage = loadImage("images/jerryOne.png");
    jerryimage2 = loadImage("images/jerryTwo.png");
    jerryimage3 = loadImage("images/jerryThree.png");
    jerryimage4 = loadImage("images/jerryFour.png");

    bgimage = loadImage("images/garden.png");
}

function setup(){
    createCanvas(800,800);
    //create tom and jerry sprites here
    tom = createSprite(700,570,30,30); 
    tom.scale = 0.15;

    jerry = createSprite(100,570,30,30);
    jerry.scale = 0.15 ;

    bg = createSprite(150,150,30,30);
    bg.addImage("bloop", bgimage);
    bg.scale = 1.5;
}

function draw() {

    background(0);
    //Write condition here to evalute if tom and jerry collide
    keyPressed();
    goal(); 

    if (gameState === "start") {
        tom.addImage("meow", tomimage);
        jerry.addImage("squek", jerryimage);
    }

    if (gameState === "play") {
        tom.addImage("meow", tomimage2);
        tom.changeImage("meow", tomimage2);
        jerry.addImage("squek", jerryimage3);
        jerry.changeImage("squek", jerryimage3);
    }

    if (gameState === "end") {
        tom.addImage("meow", tomimage3);
        tom.changeImage("meow", tomimage3);
        jerry.addImage("squek", jerryimage2)
        jerry.changeImage("squek", jerryimage2)
    }
    jerry.depth = bg.depth + 1;
    tom.depth = jerry.depth;
    console.log(mouseX, mouseY);
    drawSprites();
}


function keyPressed(){
  //For moving and changing animation write code here
    if (keyWentUp("LEFT_ARROW")) {
        if(gameState === "start") {
         gameState = "play";
        }

        if (gameState === "play") {
            tom.x = tom.x - 15;
        }
    }
}

function goal() {
    if ( tom.x - jerry.x < (jerry.width + tom.width)/2 
    && jerry.x - tom.x < (jerry.width + tom.width)/2
    && tom.y - jerry.y < (jerry.height + tom.height)/2
    && jerry.y - tom.y < (jerry.height + tom.height)/2
    ) {
        console.log("TOUCHING");
        gameState = "end";    }
}
