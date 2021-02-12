import Background from '../Background';


test("test", () => {
    $ = jest.fn().mockImplementation(() => {
        this.width = jest.fn();
        this.height = jest.fn();
        return this;
    });
    let background = new Background();
    expect(6).toBe(6);
})