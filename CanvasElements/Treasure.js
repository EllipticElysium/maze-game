class Treasure extends GeneratedElement {
    value = 0;

    constructor(index) {
        super();
        this.id = index;
        this.value = Math.floor(Math.random() * (9)) * 100 + 100;
        this.radius = canvasBackground.height/20;
    }

    detectHit() {
        if(this.hit(player) && this.used === false) {
            this.used = true;
            player.updateScore(this.value);
            delete Room.rooms[player.currentRoom].treasure[this.id];
        }
    }
}