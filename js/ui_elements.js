var UI = {

    Button : function(x,y,text,params) {

        //
        //Default Parameters
        //

        if (params == undefined) {
            params = {};
        }
        if (params.backgroundColor == undefined)
            params.backgroundColor = 0xEEEEEE;
        if (params.textStyle == undefined) {
            params.textStyle = {
                fontFamily : 'Arial', 
                fontSize: 24, 
                fill : 0x000000
            }
        }

        //
        //Display Elements
        //

        var ourButton = new PIXI.Container();
            ourButton.interactive = true;
            ourButton.x = x;
            ourButton.y = y;

        var buttonBody = new PIXI.Graphics();
            buttonBody.beginFill(params.backgroundColor);
            buttonBody.drawRect(0, 0, 180, 80);
            ourButton.addChild(buttonBody);

            ourButton.body = buttonBody;
        
        var buttonText = new PIXI.Text(text,params.textStyle);
            buttonText.anchor.set(.5);
            buttonText.x = buttonBody.width / 2;
            buttonText.y = buttonBody.height / 2 + buttonText.height / 2 -10;
            ourButton.addChild(buttonText);

            ourButton.label = buttonText;

        //
        //Event Listeners
        //

        //Click listener
        ourButton.onclick = function (e) {
            console.log("Clicked");
        };
        ourButton.on("click",(e) => ourButton.onclick(e));
        
        //Pointer down and up
        ourButton.pointerover = function (e) {
            buttonBody.alpha = 0.7;
        };
        ourButton.on("pointerover", (e) => ourButton.pointerover(e));
        
        ourButton.pointerout = function (e) {
            buttonBody.alpha = 1.0;
        };
        ourButton.on("pointerout",(e) => ourButton.pointerout(e));

        //Hover listeners
        // ourButton.pointerover = function (e) {
        //     ourButton.alpha = 0.9;
        // };
        // ourButton.on("pointerover",(e) => ourButton.pointerover(e));
        
        // ourButton.pointerout = function (e) {
        //     ourButton.alpha = 1.0;
        // };
        // ourButton.on("pointerout",(e) => ourButton.pointerout(e));

        return ourButton;

    },

    

}