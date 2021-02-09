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

        if(this.hitDoor()) {
            currentRoom = rooms[currentRoom].changeRoom('up');
            drawBackground()
            this.x = 50;
            this.y = 50;
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

    hitDoor() {
        if(rooms[currentRoom].up) {
            if(this.y - this.radius + this.dy < 0 && this.x > canvasPlayer.width*(5/12) && this.x < canvasPlayer.width*(7/12)) {
                return true;
            }
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