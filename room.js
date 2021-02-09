class room {

    id = null;
    endRoom = false;
    visited = false;
    availableDirections = 4;
    up = '';
    right = '';
    down = '';
    left = '';
    contents = {
        treasure: [],
        items: [],
        enemies: []
    };
    enemies = {};

    constructor(id, gridSize) {
        this.id = id;
        this.up = id - gridSize;
        this.right = id + 1;
        this.down = id + gridSize;
        this.left = id - 1;

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

        if(Math.random() <= 0.4) {
            this.contents.treasure.push(new Treasure());
        }
        if(Math.random() <= 0.2) {
            this.contents.enemies.push(new Enemy());
        }
        
    }

    changeRoom(direction) {
        return this[direction];
    }
}