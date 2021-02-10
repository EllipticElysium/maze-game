class Projectile {
    x = 0;
    y = 0;
    radius = 5;
    angle = 0;
    speed = 5;
    dx = 0;
    dy = 0;

    constructor(x, y) {
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
    }
}