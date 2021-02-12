import GeneratedElement from './GeneratedElement';
import Room from './Room';

export default class Enemy extends GeneratedElement {
    levels = {
        '1': [50, 1],
        '2': [35, 2],
        '3': [27, 3],
        '4': [20, 4],
        '5': [16, 5],
        '6': [13, 6],
        '7': [9, 7]
    }
    level = null;

    constructor(index) {
        super();
        this.id = index;
        this.type = 'Enemy';
        this.level = Math.floor(Math.random() * (7)) +1;
        this.radius = global.background.canvas.height/this.levels[this.level][0];
        this.speed = this.levels[this.level][1];
        this.dx = 1;
        this.dy = 1;
        this.width = this.radius * 2;
        this.height = this.radius * 2;
        this.setRandomDirection();
    }

    setRandomDirection() {
        this.dx *= (-1) ** Math.floor(Math.random() * (10));
        this.dy *= (-1) ** Math.floor(Math.random() * (10));
    }
    
    update() {
        this.detectHit();
        this.radius = global.background.canvas.height/this.levels[this.level][0];
        this.speed = this.levels[this.level][1];
        this.width = this.radius * 2;
        this.height = this.radius * 2;
        this.move();
    }

    detectHit() {
        let self = this;
        Object.keys(global.player.projectiles).forEach(function(index) {
            let Projectile = global.player.projectiles[index];
            if(self.hit(Projectile) && Projectile.used === false) {
                Projectile.used = true;
                self.projectileHit(Projectile);
            }
        })
        if(this.hit(global.player)) {
            if(this.overlay === false) {
                this.overlay = true;
                global.player.updateScore(-200);
            }
        } else {
            this.overlay = false;
        }
    }

    projectileHit(Projectile) {
        delete global.player.projectiles[Projectile.id];
        if(this.level > 1) {
            this.level -= 1;
        } else {
            delete Room.rooms[global.player.room].enemies[this.id];
        }
    }
}