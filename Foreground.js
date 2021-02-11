class Foreground extends Canvas {

    constructor() {
        super();
        this.canvas = document.getElementById('canvas-foreground');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = this.dimensions;
        this.canvas.height = this.dimensions;
        // this.doorMin = this.dimensions * (5/12);
        // this.doorMax = this.dimensions * (7/12);
    }

    update() {
        if(player.finished !== true) {
            this.clear();
            player.move();
            this.draw();
    
            requestAnimationFrame(this.update.bind(this));
        }
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc(player.x, player.y, player.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = 'purple';
        this.ctx.fill();

        let self = this;
        Object.keys(Room.rooms[player.currentRoom].treasure).forEach(function(index) {
            let treasure = Room.rooms[player.currentRoom].treasure[index];
            treasure.update();
            self.ctx.beginPath();
            self.ctx.arc(treasure.x, treasure.y, treasure.radius, 0, Math.PI * 2);
            self.ctx.fillStyle = 'gold';
            self.ctx.fill();
        })
    
        Object.keys(Room.rooms[player.currentRoom].enemies).forEach(function(index) {
            let enemy = Room.rooms[player.currentRoom].enemies[index];
            enemy.update();
            self.ctx.beginPath();
            self.ctx.arc(enemy.x, enemy.y, enemy.radius, 0, Math.PI * 2);
            self.ctx.fillStyle = 'red';
            self.ctx.fill();
        })
    
        Object.keys(player.projectiles).forEach(function(index) {
            let Projectile = player.projectiles[index];
            Projectile.move();
            self.ctx.beginPath();
            self.ctx.arc(Projectile.x, Projectile.y, Projectile.radius, 0, Math.PI * 2);
            self.ctx.fillStyle = 'blue';
            self.ctx.fill();
        })
    }
}