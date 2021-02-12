import Canvas from './Canvas';

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
        this.ctx.beginPath();
        this.ctx.arc(global.player.x, global.player.y, global.player.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = 'purple';
        this.ctx.fill();

        let self = this;
        Object.keys(Room.rooms[global.player.room].treasure).forEach(function(index) {
            let treasure = Room.rooms[global.player.room].treasure[index];
            treasure.update();
            self.ctx.beginPath();
            self.ctx.arc(treasure.x, treasure.y, treasure.radius, 0, Math.PI * 2);
            self.ctx.fillStyle = 'gold';
            self.ctx.fill();
        })
    
        Object.keys(Room.rooms[global.player.room].enemies).forEach(function(index) {
            let enemy = Room.rooms[global.player.room].enemies[index];
            enemy.update();
            self.ctx.beginPath();
            self.ctx.arc(enemy.x, enemy.y, enemy.radius, 0, Math.PI * 2);
            self.ctx.fillStyle = 'red';
            self.ctx.fill();
        })
    
        Object.keys(global.player.projectiles).forEach(function(index) {
            let Projectile = global.player.projectiles[index];
            Projectile.move();
            self.ctx.beginPath();
            self.ctx.arc(Projectile.x, Projectile.y, Projectile.radius, 0, Math.PI * 2);
            self.ctx.fillStyle = 'blue';
            self.ctx.fill();
        })
    }
}
