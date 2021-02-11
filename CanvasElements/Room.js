class Room extends CanvasElement {
    up = '';
    right = '';
    down = '';
    left = '';
    endRoom = false;
    visited = false;
    availableDirections = 4;
    treasure = {};
    items = {};
    enemies = {};

    constructor(index, gridSize) {
        super();
        this.id = index;
        this.up = this.id - gridSize;
        this.right = this.id + 1;
        this.down = this.id + gridSize;
        this.left = this.id - 1;

        if(this.id < gridSize) {
            this.up = null;
            this.availableDirections --;
        } else if (this.id >= ((gridSize ** 2) - gridSize)) {
            this.availableDirections --;
            this.down = null;
        }
        if((this.id % gridSize) === 0) {
            this.availableDirections --;
            this.left = null;
        } else if((this.id % gridSize) === (gridSize -1)) {
            this.availableDirections --;
            this.right = null;
        }

        this.generateTreasure();
        this.generateEnemies();
    }

    generateTreasure() {
        if(Math.random() <= 0.8) {
            let index = Object.keys(this.treasure).length;
            this.treasure[index] = new Treasure(index)
        }    
    }

    generateEnemies() {
        if(Math.random() <= 0.6) {
            let index = Object.keys(this.treasure).length;
            this.enemies[index] = new Enemy(index)
        }    
    }

    changeRoom(direction) {
        return this[direction];
    }
}