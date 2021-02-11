class Background extends Canvas {
    canvasRect = null;

    constructor() {
        super();
        this.canvas = document.getElementById('canvas-background');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = this.dimensions;
        this.canvas.height = this.dimensions;
        this.doorMin = this.dimensions * (5/12);
        this.doorMax = this.dimensions * (7/12);
        this.canvasRect = this.canvas.getBoundingClientRect();
    }

    draw() {
        this.clear();
        let id = player.currentRoom;

        this.ctx.beginPath();
        this.ctx.moveTo(0, 0);
        this.ctx.strokeStyle = 'green';
        this.ctx.lineWidth = 20;
        this.ctx.lineTo(this.canvas.width, 0);
        this.ctx.lineTo(this.canvas.width, this.canvas.height);
        this.ctx.lineTo(0, this.canvas.height);
        this.ctx.lineTo(0, 0);
        this.ctx.stroke();



        this.ctx.beginPath();
        this.ctx.strokeStyle = 'black';
        this.ctx.lineWidth = 20;
        this.ctx.moveTo(0, 0);
        this.ctx.lineTo(this.doorMin, 0);
        if(Room.rooms[id].up) {
            this.ctx.moveTo(this.doorMax, 0);
        } else {
            this.ctx.lineTo(this.doorMax, 0);
        }
        
        this.ctx.lineTo(this.canvas.width, 0);

        this.ctx.lineTo(this.canvas.width, this.doorMin);
        if(Room.rooms[id].right) {
            this.ctx.moveTo(this.canvas.width, this.doorMax);
        } else {
            this.ctx.lineTo(this.canvas.width, this.doorMax);
        }
        this.ctx.lineTo(this.canvas.width, this.canvas.height);

        this.ctx.lineTo(this.doorMax, this.canvas.height);
        if(Room.rooms[id].down) {
            this.ctx.moveTo(this.doorMin, this.canvas.height);
        } else {
            this.ctx.lineTo(this.doorMin, this.canvas.height);
        }
        this.ctx.lineTo(0, this.canvas.height);

        this.ctx.lineTo(0, this.doorMax);
        if(Room.rooms[id].left) {
            this.ctx.moveTo(0, this.doorMin);
        } else {
            this.ctx.lineTo(0, this.doorMin);
        }
        this.ctx.lineTo(0, 0);

        this.ctx.stroke();
    }
}