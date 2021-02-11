class Treasure extends GeneratedElement {
    value = 0;

    constructor(index) {
        super();
        this.id = index;
        this.value = Math.floor(Math.random() * (9)) * 100 + 100;
    }

    detectHit() {
        if(this.hit(player) && this.used === false) {
            this.used = true;
            player.updateScore(this.value);
            rooms[currentRoom].contents.treasure.splice(this.index, 1);
        }
    }
}