class Game{
    constructor(){
        
    }
    
    getstate(){

        var getstateRef=database.ref("gameState")  
        getstateRef.on("value",function(data){                   
          
            gameState=data.val()

        })
    }
    update(state){
        database.ref("/").update({      // '/' means referring to the main database 

            gameState:state
        })  


    }

   async start(){          //async=wait

        if(gameState===0){
            player=new Player()
            var playerCountRef=await database.ref("playerCount").once("value")

            if(playerCountRef.exists()){

                playerCount=playerCountRef.val()
                player.getCount()
            }

          
            form=new Form()
            form.display()
        }
        car1=createSprite(100,200)
        car1.shapeColor="purple"

        car2=createSprite(300,200)
        car2.shapeColor="blue"

        car3=createSprite(500,200)
        car3.shapeColor="yellow"

        car4=createSprite(700,200)
        car4.shapeColor="red"

        cars=[car1,car2,car3,car4]
        



    }
play(){
     
form.hide()

Player.getPlayerinfo()

if(allplayers!=undefined){
     var index = 0                   //index of the cars arrey
     var x = 0;
     var y ;
     
     for(var i in allplayers){
         index = index+1                 //add 1 to the index for every loop  

         x = x+200                     //spacing between the cars
         y = displayHeight - allplayers[i].distance
         cars[index-1].x = x
         cars[index-1].y = y
         
        if(index == player.index){
        cars[index-1].shapeColor =("green")
        camera.position.x = displayWidth/2
        camera.position.y = cars[index-1].y
      }
}
}
if(keyIsDown(UP_ARROW)&& player.index!==null){
player.distance+=10
player.update()
}
drawSprites()
}
}
