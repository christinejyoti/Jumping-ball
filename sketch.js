var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(1200,600);

    wall1 = createSprite(100,580,200,30);
    wall1.shapeColor = rgb(0,0,255);

    wall2 = createSprite(395,580,200,30);
    wall2.shapeColor = rgb(255,90,0);

    wall3 = createSprite(715,580,200,30);
    wall3.shapeColor = rgb(120,0,7);

    wall4 = createSprite(1040,580,220,30);
    wall4.shapeColor = rgb(0,10,0);

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityX = 7;
    ball.velocityY = 9;

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    if(wall1.isTouching(ball) && ball.bounceOff(wall1)){
        ball.shapeColor = rgb(0,0,255);
        music.play();
    }

    if(wall2.isTouching(ball)){
        ball.shapeColor = rgb(255,90,0);
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.stop();
    }

    if(wall3.isTouching(ball) && ball.bounceOff(wall3)){
        ball.shapeColor = rgb(120,0,7);
    }

    if(wall4.isTouching(ball) && ball.bounceOff(wall4)){
        ball.shapeColor = rgb(0,10,0);
    }

    drawSprites();
}
