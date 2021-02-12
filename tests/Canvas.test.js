import Canvas from '../Canvas';

test("A new Canvas dimensions is set to 80% of the window height", () => {
    window.innerHeight = 100;
    $ = jest.fn().mockImplementation(() => {
        this.width = jest.fn();
        this.height = jest.fn();
        return this;
    });
    let newCanvas = new Canvas();
    expect(newCanvas.dimensions).toBe(80);
})