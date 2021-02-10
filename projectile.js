class Projectile {
    index = null;
    x = 0;
    y = 0;
    radius = canvasBackground.height/100;
    angle = 0;
    speed = 5;
    dx = 0;
    dy = 0;
    used = false;

    constructor(x, y, index) {
        this.index = index;
        this.x = player.x;
        this.y = player.y;
        this.angle = Math.atan((y-this.y) / (x-this.x));
        this.dx = this.speed * Math.cos(this.angle);
        this.dy = this.speed * Math.sin(this.angle);
        if(x-this.x < 0) {
            this.dx *= -1;
            this.dy *= -1;
        }
    }

    move() {
        this.x += this.dx;
        this.y += this.dy;

        if(
            this.x + this.radius + this.dx > canvasBackground.width - ctxBackground.lineWidth ||
            this.x - this.radius + this.dx < 0 + ctxBackground.lineWidth  ||
            this.y + this.radius + this.dy > canvasBackground.height - ctxBackground.lineWidth ||
            this.y - this.radius + this.dy < 0 + ctxBackground.lineWidth
            ) {
            delete player.projectiles[this.index];
        }
    }
}