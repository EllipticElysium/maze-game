class Item {
    index = null;
    x = 0;
    y = 0;
    radius = 0;

    constructor(radius) {
        this.radius = radius;
        this.generateRandomPosition();
    }

    generateRandomPosition() {
        let width = canvasBackground.width;
        let height = canvasBackground.height;
        this.x = Math.floor(Math.random() * (width - this.radius * 2)) + this.radius;
        this.y = Math.floor(Math.random() * (height - this.radius * 2)) + this.radius;
    }

    update() {
        this.detectHit();
    }

    hit(target) {
        if(
            ((this.radius - target.radius) ** 2) <= 
            ((this.x - target.x) ** 2 + (this.y - target.y) ** 2) &&
            ((this.x - target.x) ** 2 + (this.y - target.y) ** 2) <=
            ((this.radius + target.radius) ** 2)
        ) {
            return true;
        } else {
            return false;
        }
    }
}

class Treasure extends Item {
    value = 0;

    constructor(index) {
        super(canvasBackground.height/20);
        this.index = index;
        this.value = Math.floor(Math.random() * (100)) * 10;
    }

    detectHit() {
        if(this.hit(player)) {
            player.score += this.value;
            rooms[currentRoom].contents.treasure.pop();
            console.log('player hit treasuer!');
        }
    }
}

class Enemy extends Item {
    levels = {
        '1': [7, 1],
        '2': [10, 2],
        '3': [15, 3],
        '4': [20, 4],
        '5': [25, 5]
    }
    level = null;
    speed = null;
    dx = 1;
    dy = 1;

    constructor(index) {
        super(1);
        this.level = Math.floor(Math.random() * (5)) +1;
        this.index = index;
        this.dx *= (-1) ** Math.floor(Math.random() * (10));
        this.dy *= (-1) ** Math.floor(Math.random() * (10));
    }

    update() {
        this.detectHit();
        this.radius = this.levels[this.level][0];
        this.speed = this.levels[this.level][1];
        if(
            this.x + this.radius + this.dx > canvasBackground.width - ctxBackground.lineWidth ||
            this.x - this.radius + this.dx < 0 + ctxBackground.lineWidth
            ) {
            this.dx *= -1;
        }
        if(
            this.y + this.radius + this.dy > canvasBackground.height - ctxBackground.lineWidth ||
            this.y - this.radius + this.dy < 0 + ctxBackground.lineWidth
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
            console.log('player hit enemy!');
        }
    }

    projectileHit() {
        delete player.projectiles[Projectile.index];
        if(this.level > 1) {
            this.level -= 1;
        } else {
            delete rooms[currentRoom].contents.enemies[this.index];
        }
    }
}
