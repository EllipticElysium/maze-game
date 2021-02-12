import CanvasElement from './CanvasElement';

export default class Marker extends CanvasElement {
    width = null;
    height = null;

    constructor(index) {
        super()
        this.id = index;
        this.x = global.player.x;
        this.y = global.player.y;
        this.radius = global.background.canvas.height/10;
        this.width = this.radius * 2;
        this.height = this.radius * 2;
    }
}