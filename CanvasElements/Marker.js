class Marker extends CanvasElement {

    constructor(index) {
        super()
        this.id = index;
        this.x = player.x;
        this.y = player.y;
        this.radius = background.canvas.height/15;
    }
}