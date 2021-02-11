class GeneratedElement extends MovableElement{
    used = false;

    constructor() {
        super();
        this.setRandomPosition();
    }

    setRandomPosition() {
        let width = canvasBackground.width;
        let height = canvasBackground.height;
        this.x = Math.floor(Math.random() * (width * 0.6)) + (width * 0.2);
        this.y = Math.floor(Math.random() * (height * 0.6)) + (width * 0.2);
    }
}