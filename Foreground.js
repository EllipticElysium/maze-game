import Canvas from './Canvas';
import Room from './CanvasElements/Room';

export default class Foreground extends Canvas {

    constructor() {
        super();
        this.canvas = document.getElementById('canvas-foreground');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = this.dimensions;
        this.canvas.height = this.dimensions;
    }

    update() {
        if(global.player.finished !== true) {
            this.clear();
            global.player.move();
            this.draw();
    
            requestAnimationFrame(this.update.bind(this));
        }
    }

    draw() {
        const playerImage = document.getElementById('player');
        const treasureImage = document.getElementById('treasure');
        const enemyImage = document.getElementById('enemy');
        const projectileImage = document.getElementById('projectile');

        this.ctx.drawImage(playerImage, global.player.x - global.player.radius, global.player.y - global.player.radius, global.player.width, global.player.height);

        this.ctx.beginPath();
        this.ctx.arc(global.player.x, global.player.y, global.player.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = 'transparent';
        this.ctx.fill();

        let self = this;
        Object.keys(Room.rooms[global.player.room].treasure).forEach(function(index) {
            let treasure = Room.rooms[global.player.room].treasure[index];
            treasure.update();
            self.ctx.drawImage(treasureImage, treasure.x - treasure.radius, treasure.y - treasure.radius, treasure.width, treasure.height);
            self.ctx.beginPath();
            self.ctx.arc(treasure.x, treasure.y, treasure.radius, 0, Math.PI * 2);
            self.ctx.fillStyle = 'transparent';
            self.ctx.fill();
        })
    
        Object.keys(Room.rooms[global.player.room].enemies).forEach(function(index) {
            let enemy = Room.rooms[global.player.room].enemies[index];
            enemy.update();
            self.ctx.drawImage(enemyImage, enemy.x - enemy.radius, enemy.y - enemy.radius, enemy.width, enemy.height);
            self.ctx.beginPath();
            self.ctx.arc(enemy.x, enemy.y, enemy.radius, 0, Math.PI * 2);
            self.ctx.fillStyle = 'transparent';
            self.ctx.fill();
        })
    
        Object.keys(global.player.projectiles).forEach(function(index) {
            let Projectile = global.player.projectiles[index];
            Projectile.move();
            self.ctx.drawImage(projectileImage, Projectile.x - Projectile.radius, Projectile.y - Projectile.radius, Projectile.width, Projectile.height);
            self.ctx.beginPath();
            self.ctx.arc(Projectile.x, Projectile.y, Projectile.radius, 0, Math.PI * 2);
            self.ctx.fillStyle = 'blue';
            self.ctx.fill();
        })
    }
}
