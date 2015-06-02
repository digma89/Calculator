var objects;
(function (objects) {
    //button class
    var Button = (function () {
        //Constructor
        function Button(imageString, x, y) {
            this.image = new createjs.Bitmap(imageString);
            this.image.regX = this.image.getBounds().width * 0.5;
            this.image.regY = this.image.getBounds().height * 0.5;
            this.image.x = x;
            this.image.y = y;
            //creating event listeners for mouse over and mouseout events 
            this.image.on("mouseover", this.OnOver, this);
            this.image.on("mouseout", this.OnOut, this);
        }
        //Public mehtods 
        Button.prototype.OnOver = function (event) {
            this.image.alpha = 0.8; //80% opacity
        };
        Button.prototype.OnOut = function (event) {
            this.image.alpha = 1.0; //100% opacity
        };
        return Button;
    })();
    objects.Button = Button;
})(objects || (objects = {}));
//# sourceMappingURL=buttons.js.map