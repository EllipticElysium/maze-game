const testMode = true;
const Background = require('../Background');

test("test", () => {
    let background = new Background();
    // $ = jest.fn().mockImplementation(() => {
    //     this.width = jest.fn();
    //     this.height = jest.fn();
    //     return this;
    // });
    expect(background.value).toBe(6);
})