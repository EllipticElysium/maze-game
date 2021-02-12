// const Background = require('../Background');
import Background from '../Background';


test("test", () => {
    let background = new Background();
    // $ = jest.fn().mockImplementation(() => {
    //     this.width = jest.fn();
    //     this.height = jest.fn();
    //     return this;
    // });
    expect(6).toBe(6);
})