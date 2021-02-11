class Canvas {
    canvas = null;
    ctx = null
    dimensions = null;
    doorMin = null;
    doorMax = null;

    constructor() {
        this.dimensions = window.innerHeight * 0.80;
        $('.background-image').width(this.dimensions/2);
        $('.background-image').height(this.dimensions/2);
    }
}