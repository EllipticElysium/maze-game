class room {

    id = null;
    availableDirections = 4;
    up = '';
    right = '';
    dowm = '';
    left = '';

    constructor(id, gridSize) {
        this.id = id;
        this.up = id - gridSize;
        this.right = id + 1;
        this.dowm = id + gridSize;
        this.left = id - 1;
        if(id < gridSize) {
            this.up = null;
            this.availableDirections --;
        } else if (id >= ((gridSize ** 2) - gridSize)) {
            this.availableDirections --;
            this.dowm = null;
        }
        if((id % gridSize) === 0) {
            this.availableDirections --;
            this.left = null;
        } else if((id % gridSize) === (gridSize -1)) {
            this.availableDirections --;
            this.right = null;
        }
    }

    changeRoom(direction) {
        console.log(this[direction]);
    }
}