import CanvasElement from './CanvasElement';
import Room from './Room';

export default class MovableElement extends CanvasElement {
    speed = 0;
    dx = 0;
    dy = 0;
    wallHit = false;
    type = null;

    constructor() {
        super();
    }

    move() {
        this.wallHit = this.getWallHit();
        if(this.wallHit === false) {
            if(this.type == 'Enemy') {
                this.x += this.speed * this.dx;
                this.y += this.speed * this.dy; 
            } else {
                this.x += this.dx;
                this.y += this.dy;
            }
        } else if(this instanceof Projectile){
            delete global.player.projectiles[this.id];
        } else if(this.type ==  'Player') {    
            let roomChange = this.hitDoor();
            if(roomChange !== false) {
                global.player.room = Room.rooms[global.player.room].changeRoom(roomChange.direction);
                global.background.draw();
                this.x = roomChange.x;
                this.y = roomChange.y;
            }        
        } else if(this.type == 'Enemy') {
            if(this.wallHit === 'up' || this.wallHit === 'down') {
                this.dy *= -1;
            } else if(this.wallHit === 'right' || this.wallHit === 'left') {
                this.dx *= -1;
            }
            this.x += this.speed * this.dx;
            this.y += this.speed * this.dy; 
        }
    }

    getWallHit() {
        if(this.x + this.radius + this.dx > global.background.canvas.width - global.background.ctx.lineWidth) {
            return 'right';
        } else if(this.x - this.radius + this.dx < 0 + global.background.ctx.lineWidth) {
            return 'left';
        } else if(this.y + this.radius + this.dy > global.background.canvas.height - global.background.ctx.lineWidth) {
            return 'down';
        } else if(this.y - this.radius + this.dy < 0 + global.background.ctx.lineWidth) {
            return 'up';
        } else {
            return false;
        }
    }

    variableBetweenValues(variable, minValue, maxValue) {
        if(variable >= minValue && variable <= maxValue){
            return true;
        } else {
            return false;
        }

    }
}