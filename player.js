class Player{
    constructor(){
        
        this.index=0;
        this.distance=0;
        this.name=null;
        
    }

    getCount(){
        var playerCountRef=database.ref("playerCount")
        playerCountRef.on("value",function(data){
            playerCount=data.val()

        })
    }
    updateCount(count){
      
            database.ref("/").update({      
    
                playerCount:count
            })  

    }
    update(){
      var playerIndex="players/player"+this.index                    

        database.ref(playerIndex).set({    

            name:this.name,distance:this.distance
        })  

}
      static getPlayerinfo(){                           //static=referrring to the whole class like entrie player class
           var playerinforef=database.ref("players")

           playerinforef.on("value",function(data){
               allplayers=data.val()
           })
 }
    
}
