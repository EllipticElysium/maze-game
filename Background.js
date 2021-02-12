import Canvas from './Canvas';

export default class Background extends Canvas {
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
        let id = global.player.room

        this.ctx.lineWidth = 20;

        this.drawWalls();
        this.drawDoors(id);
        this.drawMarkers();
    }

    drawWalls() {
        this.ctx.beginPath();
        this.ctx.strokeStyle = 'black';
        this.ctx.moveTo(0, 0);
        this.ctx.lineTo(this.doorMin, 0);
        this.ctx.moveTo(this.doorMax, 0);
        this.ctx.lineTo(this.canvas.width, 0);
        this.ctx.lineTo(this.canvas.width, this.doorMin);
        this.ctx.moveTo(this.canvas.width, this.doorMax);
        this.ctx.lineTo(this.canvas.width, this.canvas.height);
        this.ctx.lineTo(this.doorMax, this.canvas.height);
        this.ctx.moveTo(this.doorMin, this.canvas.height);
        this.ctx.lineTo(0, this.canvas.height);
        this.ctx.lineTo(0, this.doorMax);
        this.ctx.moveTo(0, this.doorMin);
        this.ctx.lineTo(0, 0);
        this.ctx.stroke();
    }

    drawDoors(id) {
        let upDoor = new Door('up');
        let rightDoor = new Door('right');
        let downDoor = new Door('down');
        let leftDoor = new Door('left');

        if(Room.rooms[id].up) {
            upDoor.status = 'active'
        }
        if(Room.rooms[id].right) {
            rightDoor.status = 'active'
        }
        if(Room.rooms[id].down) {
            downDoor.status = 'active'
        }
        if(Room.rooms[id].left) {
            leftDoor.status = 'active'
        }

        upDoor.draw()
        rightDoor.draw()
        downDoor.draw()
        leftDoor.draw()
    }

    drawMarkers() {
        let self = this;
        Object.keys(Room.rooms[global.player.room].markers).forEach(function(index) {
            let marker = Room.rooms[global.player.room].markers[index];
            self.ctx.beginPath();
            self.ctx.arc(marker.x, marker.y, marker.radius, 0, Math.PI * 2);
            self.ctx.fillStyle = 'blue';
            self.ctx.fill();
        })
    }
}
