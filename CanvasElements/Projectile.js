class Projectile extends GeneratedElement {
    angle = 0;
    speed = 5;

    constructor(index, x, y) {
        super();
        this.id = index;
        this.x = player.x;
        this.y = player.y;
        this.radius = background.canvas.height/100;
        
        this.setDirection(x, y);
    }

    setDirection(x, y) {
        this.angle = Math.atan((y-this.y) / (x-this.x));
        this.dx = this.speed * Math.cos(this.angle);
        this.dy = this.speed * Math.sin(this.angle);
        if(x-this.x < 0) {
            this.dx *= -1;
            this.dy *= -1;
        }
    }
}