class Form{
    constructor(){
        
       this.input=createInput("Name")
       this.button= createButton("play")
      this.greeting=createElement("h3")
    
    }
    display()
    {
        var title= createElement("h2")
        title.html("Car Racing Game!")
        title.position(displayWidth/2-60,0)

    
       this.input.position(displayWidth/2-30,displayHeight/2-50)
        this.button.position(displayWidth/2+30,displayHeight/2)
       this.button.mousePressed(()=>{        //=> means refer to the form or main object

           this.input.hide()
           this.button.hide()

            player.name=this.input.value()
            playerCount+=1
            player.index=playerCount;
            player.update()
            player.updateCount(playerCount)

           
           this.greeting.html("Guten Tag!"+ player.name)
           this.greeting.position(displayWidth/2-70,displayHeight/4)
            
        })
    }

    hide(){             //hide=called when the gameState changes to hide the form

        this.input.hide()
        this.button.hide()
        this.greeting.hide()
    }



}