export default class Door{
    colours = {};
    status = null;
    direction = null;

    constructor(direction) {
        this.colours.active = 'green';
        this.colours.disabled = 'black';
        this.colours.locked = 'red';
        this.status = 'disabled';
        this.direction = direction;
    }

    draw() {
        switch(this.direction) {
            case 'up':
                this.upDoor();
                break;
            case 'right':
                this.rightDoor();
                break;
            case 'down':
                this.downDoor();
                break;
            case 'left':
                this.leftDoor();
                break;
        }
    }

    /* istanbul ignore next */ 
    upDoor() {
        global.background.ctx.beginPath();
        global.background.ctx.strokeStyle = this.colours[this.status];
        global.background.ctx.moveTo(global.background.doorMin, 0);
        global.background.ctx.lineTo(global.background.doorMax, 0);
        global.background.ctx.stroke();
    }

    /* istanbul ignore next */ 
    rightDoor() {
        global.background.ctx.beginPath();
        global.background.ctx.strokeStyle = this.colours[this.status];
        global.background.ctx.moveTo(global.background.canvas.width, global.background.doorMin);
        global.background.ctx.lineTo(global.background.canvas.width, global.background.doorMax);
        global.background.ctx.stroke();
    }

    /* istanbul ignore next */ 
    downDoor() {
        global.background.ctx.beginPath();
        global.background.ctx.strokeStyle = this.colours[this.status];
        global.background.ctx.moveTo(global.background.doorMax, global.background.canvas.height);
        global.background.ctx.lineTo(global.background.doorMin, global.background.canvas.height);
        global.background.ctx.stroke();
    }

    /* istanbul ignore next */ 
    leftDoor() {
        global.background.ctx.beginPath();
        global.background.ctx.strokeStyle = this.colours[this.status];
        global.background.ctx.moveTo(0, global.background.doorMax);
        global.background.ctx.lineTo(0, global.background.doorMin);
        global.background.ctx.stroke();
    }

}