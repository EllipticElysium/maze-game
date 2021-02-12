import MovableElement from './MovableElement';

export default class GeneratedElement extends MovableElement{
    used = false;

    constructor() {
        super();
        this.setRandomPosition();
    }

    setRandomPosition() {
        let width = global.background.canvas.width;
        let height = global.background.canvas.height;
        this.x = Math.floor(Math.random() * (width * 0.6)) + (width * 0.1);
        this.y = Math.floor(Math.random() * (height * 0.6)) + (width * 0.1);
    }

    update() {
        this.detectHit();
    }

    hit(target) {
        if(
            ((this.radius - target.radius) ** 2) <= 
            ((this.x - target.x) ** 2 + (this.y - target.y) ** 2) &&
            ((this.x - target.x) ** 2 + (this.y - target.y) ** 2) <=
            ((this.radius + target.radius) ** 2)
        ) {
            return true;
        } else {
            return false;
        }
    }
}