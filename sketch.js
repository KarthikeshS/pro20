var canvas;
var music;
var ball;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite(100,590,160,20);
    surface1.shapeColor="red";
    surface2 = createSprite(270,590,160,20);
    surface2.shapeColor="green";
    surface3 = createSprite(440,590,160,20);
    surface3.shapeColor="orange";
    surface4 = createSprite(610,590,160,20);
    surface4.shapeColor="pink";
    ball = createSprite(200,200,30,30);
    ball.velocityX =2;
    ball.velocityY =2;
    ball.shapeColor="white";
    
    

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    //ball.bounceOff(topEdge);
    //ball.bounceOff(bottomEdge);
    //ball.bounceOff(leftEdge);
    //ball.bounceOff(rightEdge);

    drawSprites();
    //add condition to check if box touching surface and make it box
    if (surface1.isTouching(ball) && ball.bounceOff(surface1)){
        ball.shapeColor="red";
        music.play();
    }
    if (surface2.isTouching(ball) && ball.bounceOff(surface2)){
        ball.shapeColor="green";
        music.play();
    }
    if (surface3.isTouching(ball) && ball.bounceOff(surface3)){
        ball.shapeColor="orange";
        music.play();
    }
    if (surface4.isTouching(ball) && ball.bounceOff(surface4)){
        ball.shapeColor="pink";
        music.play();
    }
}
