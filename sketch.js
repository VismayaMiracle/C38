var database;
var canvas;
var gameState=0;
var playerCount;
var form,player,game;
var allplayers;
var car1,car2,car3,car3,car4,cars;
var distance = 0


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth,displayHeight);

  game=new Game()
  game.getstate()
  game.start()  

 
}

function draw(){
  background("white");
  
   if(playerCount===4){
     game.update(1)
   }
    
   if(gameState===1){
     clear()
     game.play()
   }
 //  ok mam
  
}

