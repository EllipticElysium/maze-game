import Background from '../Background';
import 'jest-canvas-mock';


test("A new Background has A Canvas", () => {
    let element = document.createElement('canvas');
    element.setAttribute("id", "canvas-background");
    document.body.appendChild(element);
    let background = new Background();
    expect(background.canvas.nodeName).toBe('CANVAS');
})
