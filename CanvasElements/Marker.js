import CanvasElement from './CanvasElement';

export default class Marker extends CanvasElement {

    constructor(index) {
        super()
        this.id = index;
        this.x = global.player.x;
        this.y = global.player.y;
        this.radius = global.background.canvas.height/15;
    }
}