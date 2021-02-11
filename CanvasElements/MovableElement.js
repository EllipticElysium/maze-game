class MovableElement extends CanvasElement {
    speed = 0;
    dx = 0;
    dy = 0;
    constructor() {
        super();
    }

    move() {
        if(this.doesNotHitWall()) {
            this.x += this.dx;
            this.y += this.dy;
        } else if(this instanceof Projectile){
            delete player.projectiles[this.id];
        }
    }

    doesNotHitWall() {
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
}