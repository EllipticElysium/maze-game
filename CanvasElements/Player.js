import MovableElement from './MovableElement';
import Room from './Room';
import Projectile from './Projectile';



export default class Player extends MovableElement {
    room = null;
    score = 0;
    time = 0;
    won = false;
    projectileCounter = 0;
    projectiles = {};

    constructor() {
        super();
        this.type = 'Player';
        this.x = global.background.canvas.width/2;
        this.y = global.background.canvas.height/2;
        this.radius = global.background.canvas.height/40;
        this.speed = 5;
        this.startTimer();
    }

    startTimer() {
        let start = Date.now();
        setInterval(function() {
            if(global.player.finished !== true) {
                let time = Date.now() - start;
                global.player.time = Math.floor(time / 1000)
        
                $('#time').text("Time:  " + global.player.time);
            }
        }, 100);
    
    }

    hitDoor() {
        let returnVal = {};
        if(
            Room.rooms[global.player.room].up !== null &&
            this.y - this.radius + this.dy - global.background.ctx.lineWidth < 0 &&
            this.variableBetweenValues(this.x, global.background.doorMin, global.background.doorMax)
        ) {
            returnVal.direction = 'up';
            returnVal.x = this.x;
            returnVal.y = global.background.canvas.height - this.radius - global.background.ctx.lineWidth;
        } else if(
            Room.rooms[global.player.room].right !== null &&
            this.x + this.radius + this.dx + global.background.ctx.lineWidth > global.background.canvas.width &&
            this.variableBetweenValues(this.y, global.background.doorMin, global.background.doorMax)
        ) {
            returnVal.direction = 'right';
            returnVal.x = this.radius + global.background.ctx.lineWidth;
            returnVal.y = this.y;
        } else if(
            Room.rooms[global.player.room].down !== null &&
            this.y + this.radius + this.dy + global.background.ctx.lineWidth > global.background.canvas.height &&
            this.variableBetweenValues(this.x, global.background.doorMin, global.background.doorMax)
        ) {
            returnVal.direction = 'down';
            returnVal.x = this.x;
            returnVal.y = this.radius + global.background.ctx.lineWidth;
        } else if(
            Room.rooms[global.player.room].left !== null &&
            this.x - this.radius + this.dx - global.background.ctx.lineWidth < 0 &&
            this.variableBetweenValues(this.y, global.background.doorMin, global.background.doorMax)
        ) {
            returnVal.direction = 'left';
            returnVal.x = global.background.canvas.width - this.radius - global.background.ctx.lineWidth;
            returnVal.y = this.y;
        } else {
            returnVal = false;
        }

        if(returnVal !== false) {
            if(Room.rooms[global.player.room][returnVal.direction] === 'end') {
                this.playerWon();
                returnVal = false;
            }
        }

        return returnVal
    }
    
    playerWon() {
        this.finished = true;
        $('#result').text("You Win!!!");
    }

    fireProjectile(x, y) {
        this.projectiles[this.projectileCounter] = new Projectile(this.projectileCounter, x, y);
        this.projectileCounter ++;
    }

    updateScore(value) {
        this.score += value;
        $('#score').text("Score:  " + this.score);
    }

    resetPosition() {
        this.x = global.background.canvas.width/2;
        this.y = global.background.canvas.height/2;
    }
}