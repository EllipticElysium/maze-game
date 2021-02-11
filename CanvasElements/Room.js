class Room extends CanvasElement {
    up = '';
    right = '';
    down = '';
    left = '';
    treasure = {};
    items = {};
    enemies = {};

    constructor(index, gridSize) {
        this.id = index;
        this.up = index - gridSize;
        this.right = index + 1;
        this.down = index + gridSize;
        this.left = index - 1;

        if(id < gridSize) {
            this.up = null;
            this.availableDirections --;
        } else if (id >= ((gridSize ** 2) - gridSize)) {
            this.availableDirections --;
            this.down = null;
        }
        if((id % gridSize) === 0) {
            this.availableDirections --;
            this.left = null;
        } else if((id % gridSize) === (gridSize -1)) {
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
            this.enemies[index] = new Treasure(index)
        }    
    }

    changeRoom(direction) {
        return this[direction];
    }
}