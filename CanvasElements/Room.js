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
        //generate treasure and enemies
    }
}