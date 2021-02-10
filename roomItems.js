class Item {
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
        this.x = Math.floor(Math.random() * (width - this.radius * 2)) + this.radius;
        this.y = Math.floor(Math.random() * (height - this.radius * 2)) + this.radius;
    }
}

class Treasure extends Item {
    value = 0;

    constructor() {
        super(25);
        this.value = Math.floor(Math.random() * (1000));
    }
}

class Enemy extends Item {

    constructor() {
        super(50);
    }
}
