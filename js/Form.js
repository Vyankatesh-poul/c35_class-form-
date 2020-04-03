class Form{
    constructor(){

    }
    display(){
        var title = createElement('h2');
        title.html("CAR RACING GAME");
        title.position(395,50);
        var input = createInput("enter your name");
        var button = createButton('Submit');
        var greeting = createElement('h3');
        input.position(425,127);
        button.position(600,126);
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            playerCount  +=1;
            player.update(name);
            player.updateCount(playerCount);
            greeting.html("hello!"+name);
            greeting.position(330,112);
            

        });


    }
}