class Item {
    index = null;
    x = 0;
    y = 0;
    radius = 0;

    constructor(radius) {
        this.radius = radius;
        this.generateRandomPosition();
    }

    generateRandomPosition() {
        let width = canvasBackground.width;
        let height = canvasBackground.height;
        this.x = Math.floor(Math.random() * (width - (this.radius  + ctxBackground.lineWidth) * 2)) + this.radius + ctxBackground.lineWidth;
        this.y = Math.floor(Math.random() * (height - (this.radius  + ctxBackground.lineWidth) * 2)) + this.radius + ctxBackground.lineWidth;
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



