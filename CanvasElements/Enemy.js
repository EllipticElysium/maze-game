class Enemy extends GeneratedElement {
    levels = {
        '1': [7, 1],
        '2': [10, 2],
        '3': [15, 3],
        '4': [20, 4],
        '5': [25, 5]
    }
    level = null;

    constructor(index) {
        super();
        this.id = index;
        this.level = Math.floor(Math.random() * (5)) +1;
        this.radius = this.levels[this.level][0];
        this.speed = this.levels[this.level][1];
        this.dx = 1;
        this.dy = 1;
        this.setRandomDirection();
    }

    setRandomDirection() {
        this.dx *= (-1) ** Math.floor(Math.random() * (10));
        this.dy *= (-1) ** Math.floor(Math.random() * (10));
    }
    
    update() {
        this.detectHit();
        this.radius = this.levels[this.level][0];
        this.speed = this.levels[this.level][1];
        if(
            this.x + this.radius + this.speed * this.dx > canvasBackground.width - ctxBackground.lineWidth ||
            this.x - this.radius + this.speed * this.dx < 0 + ctxBackground.lineWidth
            ) {
            this.dx *= -1;
        }
        if(
            this.y + this.radius + this.speed * this.dx > canvasBackground.height - ctxBackground.lineWidth ||
            this.y - this.radius + this.speed * this.dx < 0 + ctxBackground.lineWidth
        ) {
            this.dy *= -1;
        }
        this.x += this.speed * this.dx;
        this.y += this.speed * this.dy; 
    }

    detectHit() {
        let self = this;
        Object.keys(player.projectiles).forEach(function(index) {
            let Projectile = player.projectiles[index];
            if(self.hit(Projectile) && Projectile.used === false) {
                Projectile.used = true;
                console.log('projectile hit enemy!');
                self.projectileHit();
            }
        })
        if(this.hit(player)) {
            if(this.overlay === false) {
                this.overlay = true;
                player.updateScore(-200);
            }
        } else {
            this.overlay = false;
        }
    }

    projectileHit() {
        delete player.projectiles[Projectile.id];
        if(this.level > 1) {
            this.level -= 1;
        } else {
            delete rooms[currentRoom].enemies[this.id];
        }
    }
}