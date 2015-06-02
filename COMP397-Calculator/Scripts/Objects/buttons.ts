module objects {
    //button class
    export class Button {
        //properties or instance variables 
        image: createjs.Bitmap;
        //Constructor
        constructor(imageString: string, x: number, y:number) {
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
        public OnOver(event: createjs.MouseEvent):void {
            this.image.alpha = 0.8; //80% opacity
        }
        public OnOut(event: createjs.MouseEvent): void { 
            this.image.alpha = 1.0 //100% opacity
        }
    }
}