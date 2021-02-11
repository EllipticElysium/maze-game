class GeneratedElement extends CanvasElement{
    
    constructor() {
        super();
        this.setRandomPosition();
    }

    setRandomPosition() {
        let width = canvasBackground.width;
        let height = canvasBackground.height;
        this.x = Math.floor(Math.random() * (width - (this.radius  + ctxBackground.lineWidth) * 2)) + this.radius + ctxBackground.lineWidth;
        this.y = Math.floor(Math.random() * (height - (this.radius  + ctxBackground.lineWidth) * 2)) + this.radius + ctxBackground.lineWidth;
    }
}