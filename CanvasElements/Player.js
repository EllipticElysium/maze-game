class Player extends MovableElement {
    score = 0;
    time = 0;
    won = false;
    projectileCounter = 0;
    projectiles = {};

    constructor() {
        super();
        this.x = canvasBackground.width/2;
        this.y = canvasBackground.height/2;
        this.radius = canvasBackground.height/40;
    }
}