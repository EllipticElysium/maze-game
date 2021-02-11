class Player extends MovableElement {
    currentRoom = null;
    score = 0;
    time = 0;
    won = false;
    projectileCounter = 0;
    projectiles = {};

    constructor() {
        super();
        this.x = background.canvas.width/2;
        this.y = background.canvas.height/2;
        this.radius = background.canvas.height/40;
        this.speed = 5;
        this.startTimer();
    }

    startTimer() {
        let start = Date.now();
        setInterval(function() {
            if(player.finished !== true) {
                let time = Date.now() - start;
                player.time = Math.floor(time / 1000)
        
                $('#time').text("Time:  " + player.time);
            }
        }, 100);
    
    }

    hitDoor() {
        let returnVal = {};
        if(
            Room.rooms[player.currentRoom].up !== null &&
            this.y - this.radius + this.dy - background.ctx.lineWidth < 0 &&
            this.variableBetweenValues(this.x, doorMin, doorMax)
        ) {
            returnVal.direction = 'up';
            returnVal.x = this.x;
            returnVal.y = background.canvas.height - this.radius - background.ctx.lineWidth;
        } else if(
            Room.rooms[player.currentRoom].right !== null &&
            this.x + this.radius + this.dx + background.ctx.lineWidth > background.canvas.width &&
            this.variableBetweenValues(this.y, doorMin, doorMax)
        ) {
            returnVal.direction = 'right';
            returnVal.x = this.radius + background.ctx.lineWidth;
            returnVal.y = this.y;
        } else if(
            Room.rooms[player.currentRoom].down !== null &&
            this.y + this.radius + this.dy + background.ctx.lineWidth > background.canvas.height &&
            this.variableBetweenValues(this.x, doorMin, doorMax)
        ) {
            returnVal.direction = 'down';
            returnVal.x = this.x;
            returnVal.y = this.radius + background.ctx.lineWidth;
        } else if(
            Room.rooms[player.currentRoom].left !== null &&
            this.x - this.radius + this.dx - background.ctx.lineWidth < 0 &&
            this.variableBetweenValues(this.y, doorMin, doorMax)
        ) {
            returnVal.direction = 'left';
            returnVal.x = background.canvas.width - this.radius - background.ctx.lineWidth;
            returnVal.y = this.y;
        } else {
            returnVal = false;
        }

        if(returnVal !== false) {
            if(Room.rooms[player.currentRoom][returnVal.direction] === 'end') {
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
}