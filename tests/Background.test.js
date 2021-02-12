import Background from '../Background';
import 'jest-canvas-mock';

beforeEach(() => {
    window.innerHeight = 100;
    let element = document.createElement('canvas');
    element.setAttribute("id", "canvas-background");
    document.body.appendChild(element);
    Element.prototype.getBoundingClientRect = () => {
        return {
            x: 911.5,
            y: 79,
            width: 80,
            height: 80,
            top: 79,
            right: 991.5,
            bottom: 159,
            left: 911.5
        };
    }
});
  
afterEach(() => {
    document.getElementById("canvas-background").remove();
});

test("A new Background's dimensions is set to 80% of the window height", () => {
    let newBackground = new Background();
    expect(newBackground.dimensions).toBe(80);
})

test("A new Background has A Canvas and Context", () => {
    let newBackground = new Background();
    expect(newBackground.canvas.nodeName).toBe('CANVAS');
    expect(Object.keys(newBackground.ctx).pop()).toBe('_canvas');
})

test("A new Background's width and height equals it's dimensions", () => {
    let newBackground = new Background();
    expect(newBackground.canvas.width).toBe(80);
    expect(newBackground.canvas.height).toBe(80);
})

test("A new Background's starting door location is 5/12 th's of it's dimensions", () => {
    let newBackground = new Background();
    expect(newBackground.doorMin).toBe(80* (5/12));
})

test("A new Background's ending door location is 7/12 th's of it's dimensions", () => {
    let newBackground = new Background();
    expect(newBackground.doorMax).toBe(80* (7/12));
})

test("A new Background's canvasRect is it's position within the window", () => {
    let newBackground = new Background();
    expect(newBackground.canvasRect).toStrictEqual({
        x: 911.5,
        y: 79,
        width: 80,
        height: 80,
        top: 79,
        right: 991.5,
        bottom: 159,
        left: 911.5
    });
})
