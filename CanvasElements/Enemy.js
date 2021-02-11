class Enemy extends GeneratedElement {
    levels = {
        '1': [7, 1],
        '2': [10, 2],
        '3': [15, 3],
        '4': [20, 4],
        '5': [25, 5]
    }
    level = null;

    constructor(index) {
        super();
        this.id = index;
        this.level = Math.floor(Math.random() * (5)) +1;
        this.setRandomDirection();
    }

    setRandomDirection() {
        this.dx *= (-1) ** Math.floor(Math.random() * (10));
        this.dy *= (-1) ** Math.floor(Math.random() * (10));
    }
}