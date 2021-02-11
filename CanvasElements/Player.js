class Player extends MovableElement {
    score = 0;
    time = 0;
    won = false;
    projectileCounter = 0;
    projectiles = {};

    constructor() {
        super();
        this.x = canvasBackground.width/2;
        this.y = canvasBackground.height/2;
        this.radius = canvasBackground.height/40;
        this.speed = 5;
    }

    hitDoor() {
        let returnVal = {};
        if(
            rooms[currentRoom].up !== null &&
            this.y - this.radius + this.dy - ctxBackground.lineWidth < 0 &&
            this.variableBetweenValues(this.x, doorMin, doorMax)
        ) {
            returnVal.direction = 'up';
            returnVal.x = this.x;
            returnVal.y = canvasPlayer.height - this.radius - ctxBackground.lineWidth;
        } else if(
            rooms[currentRoom].right !== null &&
            this.x + this.radius + this.dx + ctxBackground.lineWidth > canvasPlayer.width &&
            this.variableBetweenValues(this.y, doorMin, doorMax)
        ) {
            returnVal.direction = 'right';
            returnVal.x = this.radius + ctxBackground.lineWidth;
            returnVal.y = this.y;
        } else if(
            rooms[currentRoom].down !== null &&
            this.y + this.radius + this.dy + ctxBackground.lineWidth > canvasPlayer.height &&
            this.variableBetweenValues(this.x, doorMin, doorMax)
        ) {
            returnVal.direction = 'down';
            returnVal.x = this.x;
            returnVal.y = this.radius + ctxBackground.lineWidth;
        } else if(
            rooms[currentRoom].left !== null &&
            this.x - this.radius + this.dx - ctxBackground.lineWidth < 0 &&
            this.variableBetweenValues(this.y, doorMin, doorMax)
        ) {
            returnVal.direction = 'left';
            returnVal.x = canvasPlayer.width - this.radius - ctxBackground.lineWidth;
            returnVal.y = this.y;
        } else {
            returnVal = false;
        }

        if(returnVal !== false) {
            if(rooms[currentRoom][returnVal.direction] === 'end') {
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