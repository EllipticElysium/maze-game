class Item {
    x = 0;
    y = 0;

    constructor() {
        this.x = 5;
        this.y = 10;
    }
}

class Treasure extends Item {

    constructor() {
        super();
    }
}

class Enemy extends Item {

    constructor() {
        super();
    }
}

new Treasure();