import GeneratedElement from './GeneratedElement';
import Room from './Room';

export default class Treasure extends GeneratedElement {
    value = 0;

    constructor(index) {
        super();
        this.id = index;
        this.value = Math.floor(Math.random() * (9)) * 100 + 100;
        this.radius = global.background.canvas.height/20;
        this.width = this.radius * 2;
        this.height = this.radius * 2;
    }

    detectHit() {
        if(this.hit(global.player) && this.used === false) {
            this.used = true;
            global.player.updateScore(this.value);
            delete Room.rooms[global.player.room].treasure[this.id];
        }
    }
}