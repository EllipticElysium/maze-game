class Player {
    x = 50;
    y = 50;
    radius = 20;
    speed = 5;
    dx = 0;
    dy = 0;

    move() {
        if(this.canMove()) {
            this.x += this.dx;
            this.y += this.dy;
        }

        if(this.hitTopDoor()) {
            currentRoom = rooms[currentRoom].changeRoom('up');
            drawBackground()
            this.y = canvasPlayer.height - this.radius;
        } else if(this.hitRightDoor()) {
            currentRoom = rooms[currentRoom].changeRoom('right');
            drawBackground()
            this.x = this.radius;
        } else if(this.hitBottomDoor()) {
            currentRoom = rooms[currentRoom].changeRoom('down');
            drawBackground()
            this.y = this.radius;
        } else if(this.hitLeftDoor()) {
            currentRoom = rooms[currentRoom].changeRoom('left');
            drawBackground()
            this.x = canvasPlayer.width - this.radius;
        }
    }

    canMove() {
        if(
            this.x + this.radius + this.dx > canvasPlayer.width ||
            this.x - this.radius + this.dx < 0 ||
            this.y + this.radius + this.dy > canvasPlayer.height ||
            this.y - this.radius + this.dy < 0
            ) {
            return false;
        } else {
            return true;
        }
    }

    hitTopDoor() {
        if(
            rooms[currentRoom].up &&
            this.y - this.radius + this.dy < 0 &&
            this.x > canvasPlayer.width*(5/12) &&
            this.x < canvasPlayer.width*(7/12)
        ) {
            return true;
        } else {
            return false;
        }
    }

    hitRightDoor() {
        if(
            rooms[currentRoom].right &&
            this.x + this.radius + this.dx > canvasPlayer.width &&
            this.y > canvasPlayer.height*(5/12) &&
            this.y < canvasPlayer.height*(7/12)
        ) {
            return true;
        } else {
            return false;
        }
    }

    hitBottomDoor() {
        if(
            rooms[currentRoom].down &&
            this.y + this.radius + this.dx > canvasPlayer.height &&
            this.x > canvasPlayer.width*(5/12) &&
            this.x < canvasPlayer.width*(7/12)
        ) {
            return true;
        } else {
            return false;
        }
    }

    hitLeftDoor() {
        if(
            rooms[currentRoom].left &&
            this.x - this.radius + this.dx < 0 &&
            this.y > canvasPlayer.height*(5/12) &&
            this.y < canvasPlayer.height*(7/12)
        ) {
            return true;
        } else {
            return false;
        }
    }
}

class Treasure {
    //
}

class Enemy {
    //
}