class Player {
    x = canvasBackground.width/2;
    y = canvasBackground.height/2;
    radius = canvasBackground.height/40;
    speed = 10;
    dx = 0;
    dy = 0;
    score = 0;
    time = 0;
    projectileCounter = 0;
    projectiles = {};

    move() {
        if(this.canMove()) {
            this.x += this.dx;
            this.y += this.dy;
        }

        let roomChange = this.hitDoor();

        let collectItem = this.hitItem();

        if(roomChange !== false) {
            currentRoom = rooms[currentRoom].changeRoom(roomChange.direction);
            drawBackground()
            this.x = roomChange.x;
            this.y = roomChange.y;
        }

        if(collectItem !== false) {
            //
        }
    }

    canMove() {
        if(
            this.x + this.radius + this.dx > canvasBackground.width - ctxBackground.lineWidth ||
            this.x - this.radius + this.dx < 0 + ctxBackground.lineWidth  ||
            this.y + this.radius + this.dy > canvasBackground.height - ctxBackground.lineWidth ||
            this.y - this.radius + this.dy < 0 + ctxBackground.lineWidth
            ) {
            return false;
        } else {
            return true;
        }
    }

    hitDoor() {
        let returnVal = {};
        if(
            rooms[currentRoom].up !== null &&
            this.y - this.radius + this.dy - ctxBackground.lineWidth < 0 &&
            this.x > canvasPlayer.width*(5/12) &&
            this.x < canvasPlayer.width*(7/12)
        ) {
            returnVal.direction = 'up';
            returnVal.x = this.x;
            returnVal.y = canvasPlayer.height - this.radius - ctxBackground.lineWidth;
        } else if(
            rooms[currentRoom].right !== null &&
            this.x + this.radius + this.dx + ctxBackground.lineWidth > canvasPlayer.width &&
            this.y > canvasPlayer.height*(5/12) &&
            this.y < canvasPlayer.height*(7/12)
        ) {
            returnVal.direction = 'right';
            returnVal.x = this.radius + ctxBackground.lineWidth;
            returnVal.y = this.y;
        } else if(
            rooms[currentRoom].down !== null &&
            this.y + this.radius + this.dy + ctxBackground.lineWidth > canvasPlayer.height &&
            this.x > canvasPlayer.width*(5/12) &&
            this.x < canvasPlayer.width*(7/12)
        ) {
            returnVal.direction = 'down';
            returnVal.x = this.x;
            returnVal.y = this.radius + ctxBackground.lineWidth;
        } else if(
            rooms[currentRoom].left !== null &&
            this.x - this.radius + this.dx - ctxBackground.lineWidth < 0 &&
            this.y > canvasPlayer.height*(5/12) &&
            this.y < canvasPlayer.height*(7/12)
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

    hitItem() {
        return false;
    }

    playerWon() {
        console.log('win!!!');
    }

    fireProjectile(x, y) {
        this.projectiles[this.projectileCounter] = new Projectile(x, y, this.projectileCounter);
        this.projectileCounter ++;
    }

    updateScore(value) {
        console.log(1, this.score);
        this.score += value;
        $('#score').text("Score:  " + this.score);
        console.log(2, this.score);
    }
}