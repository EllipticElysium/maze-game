import GeneratedElement from './GeneratedElement';
import Room from './Room';


export default class Enemy extends GeneratedElement {
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
        this.type = 'Enemy';
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
        this.move();
    }

    detectHit() {
        let self = this;
        Object.keys(global.player.projectiles).forEach(function(index) {
            let Projectile = global.player.projectiles[index];
            if(self.hit(Projectile) && Projectile.used === false) {
                Projectile.used = true;
                console.log('projectile hit enemy!');
                self.projectileHit();
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

    projectileHit() {
        delete global.player.projectiles[Projectile.id];
        if(this.level > 1) {
            this.level -= 1;
        } else {
            delete Room.rooms[global.player.room].enemies[this.id];
        }
    }
}