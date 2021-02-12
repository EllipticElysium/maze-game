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
        this.width = global.background.canvas.height/5;
        this.height = global.background.canvas.height/5;
    }
}