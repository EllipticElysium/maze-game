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
        background.ctx.beginPath();
        background.ctx.strokeStyle = this.colours[this.status];
        background.ctx.moveTo(background.doorMin, 0);
        background.ctx.lineTo(background.doorMax, 0);
        background.ctx.stroke();
    }

    /* istanbul ignore next */ 
    rightDoor() {
        background.ctx.beginPath();
        background.ctx.strokeStyle = this.colours[this.status];
        background.ctx.moveTo(background.canvas.width, background.doorMin);
        background.ctx.lineTo(background.canvas.width, background.doorMax);
        background.ctx.stroke();
    }

    /* istanbul ignore next */ 
    downDoor() {
        background.ctx.beginPath();
        background.ctx.strokeStyle = this.colours[this.status];
        background.ctx.moveTo(background.doorMax, background.canvas.height);
        background.ctx.lineTo(background.doorMin, background.canvas.height);
        background.ctx.stroke();
    }

    /* istanbul ignore next */ 
    leftDoor() {
        background.ctx.beginPath();
        background.ctx.strokeStyle = this.colours[this.status];
        background.ctx.moveTo(0, background.doorMax);
        background.ctx.lineTo(0, background.doorMin);
        background.ctx.stroke();
    }

}