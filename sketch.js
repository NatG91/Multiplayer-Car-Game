var canvas,backgroundImage;
var game,form,player;
var gameState=0;
var playerCount=0;
var database;
var allPlayers;
var car1,car2,car3,car4;
var cars;
var track;
var car1_img,car2_img,car3_img,car4_img;
var groundImg,ground;

function preload(){
    car1_img=loadImage("../images/car1.png")
    car2_img=loadImage("../images/car2.png")
    car3_iImgmg=loadImage("../images/car3.png")
    car4_img=loadImage("../images/car4.png")

    track=loadImage("../images/track.png")

    ground=loadImage("../images/ground.png")
}

function setup(){
canvas=createCanvas(displayWidth -100,displayHeight-200);
database=firebase.database();
game=new Game();
game.getState();
game.start();

}

function draw(){
if (playerCount===4){
    game.update(1)
}
if (gameState===1){
     clear();
    game.play();
   
}
if (gameState===2){
   game.end();
    
}

}


























