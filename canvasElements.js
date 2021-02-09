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
}

class Treasure {
    //
}

class Enemy {
    //
}