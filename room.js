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
        let probabilities = [
            [0.8, 0.6],
            [0.4, 0.3],
            [0.1, 0.1]
        ];
        //for some reason a loop seems to break everything here
        if(Math.random() <= probabilities[0][0]) {
            let index = this.contents.treasure.length;
            this.contents.treasure.push(new Treasure(index));
        }
        if(Math.random() <= probabilities[1][0]) {
            let index = this.contents.treasure.length;
            this.contents.treasure.push(new Treasure(index));
        }
        if(Math.random() <= probabilities[2][0]) {
            let index = this.contents.treasure.length;
            this.contents.treasure.push(new Treasure(index));
        }

        if(Math.random() <= probabilities[0][1]) {
            let index = this.contents.enemies.length;
            this.contents.enemies.push(new Enemy(index));
        }
        if(Math.random() <= probabilities[1][1]) {
            let index = this.contents.enemies.length;
            this.contents.enemies.push(new Enemy(index));
        }
        if(Math.random() <= probabilities[2][1]) {
            let index = this.contents.enemies.length;
            this.contents.enemies.push(new Enemy(index));
        }
        
    }

    changeRoom(direction) {
        return this[direction];
    }
}