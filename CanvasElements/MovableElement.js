class MovableElement extends CanvasElement {
    speed = 0;
    dx = 0;
    dy = 0;
    wallHit = false;

    constructor() {
        super();
    }

    move() {
        this.wallHit = this.getWallHit();
        if(this.wallHit === false) {
            if(this instanceof Enemy) {
                this.x += this.speed * this.dx;
                this.y += this.speed * this.dy; 
            } else {
                this.x += this.dx;
                this.y += this.dy;
            }
        } else if(this instanceof Projectile){
            delete player.projectiles[this.id];
        } else if(this instanceof Player) {    
            let roomChange = this.hitDoor();
            if(roomChange !== false) {
                currentRoom = rooms[currentRoom].changeRoom(roomChange.direction);
                drawBackground()
                this.x = roomChange.x;
                this.y = roomChange.y;
            }        
        } else if(this instanceof Enemy) {
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
        if(this.x + this.radius + this.dx > canvasBackground.width - ctxBackground.lineWidth) {
            return 'right';
        } else if(this.x - this.radius + this.dx < 0 + ctxBackground.lineWidth) {
            return 'left';
        } else if(this.y + this.radius + this.dy > canvasBackground.height - ctxBackground.lineWidth) {
            return 'down';
        } else if(this.y - this.radius + this.dy < 0 + ctxBackground.lineWidth) {
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