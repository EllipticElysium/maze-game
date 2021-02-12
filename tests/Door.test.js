import Door from '../Door';

test('A door is initially disabled', () => {
    let newDoor = new Door();
    expect(newDoor.status).toBe('disabled');
})

test("A Door's Initial active colour is green", () => {
    let newDoor = new Door();
    expect(newDoor.colours.active).toBe('green');
})

test("A Door's Initial disabled colour is black", () => {
    let newDoor = new Door();
    expect(newDoor.colours.disabled).toBe('black');
})

test("A Door's Initial locked colour is red", () => {
    let newDoor = new Door();
    expect(newDoor.colours.locked).toBe('red');
})

test("A Door's Initial direction is the same as the value supplied in the constructor", () => {
    let newUpDoor = new Door('up');
    expect(newUpDoor.direction).toBe('up');

    let newDownDoor = new Door('down');
    expect(newDownDoor.direction).toBe('down');
})

test("A Door's Initial direction is undefined when no value is supplied in the constructor", () => {
    let newUndefinedDoor = new Door();
    expect(newUndefinedDoor.direction).toBe(undefined);
})

test("Drawing an up Door will draw a door only at the top of the room", () => {
    let newUpDoor = new Door('up');
    newUpDoor.upDoor = jest.fn();
    newUpDoor.rightDoor = jest.fn();
    newUpDoor.downDoor = jest.fn();
    newUpDoor.leftDoor = jest.fn();
    newUpDoor.draw();

    expect(newUpDoor.upDoor.mock.calls.length).toBe(1);
    expect(newUpDoor.rightDoor.mock.calls.length).toBe(0);
    expect(newUpDoor.downDoor.mock.calls.length).toBe(0);
    expect(newUpDoor.leftDoor.mock.calls.length).toBe(0);

})

test("Drawing a right Door will draw a door only at the right of the room", () => {
    let newRightDoor = new Door('right');
    newRightDoor.upDoor = jest.fn();
    newRightDoor.rightDoor = jest.fn();
    newRightDoor.downDoor = jest.fn();
    newRightDoor.leftDoor = jest.fn();
    newRightDoor.draw();

    expect(newRightDoor.rightDoor.mock.calls.length).toBe(1);
    expect(newRightDoor.upDoor.mock.calls.length).toBe(0);
    expect(newRightDoor.downDoor.mock.calls.length).toBe(0);
    expect(newRightDoor.leftDoor.mock.calls.length).toBe(0);
})

test("Drawing down Door will draw a door only at the bottom of the room", () => {
    let newDownDoor = new Door('down');
    newDownDoor.upDoor = jest.fn();
    newDownDoor.rightDoor = jest.fn();
    newDownDoor.downDoor = jest.fn();
    newDownDoor.leftDoor = jest.fn();
    newDownDoor.draw();

    expect(newDownDoor.downDoor.mock.calls.length).toBe(1);
    expect(newDownDoor.upDoor.mock.calls.length).toBe(0);
    expect(newDownDoor.rightDoor.mock.calls.length).toBe(0);
    expect(newDownDoor.leftDoor.mock.calls.length).toBe(0);
})

test("Drawing a left Door will draw a door only at the left of the room", () => {
    let newLeftDoor = new Door('left');
    newLeftDoor.upDoor = jest.fn();
    newLeftDoor.rightDoor = jest.fn();
    newLeftDoor.downDoor = jest.fn();
    newLeftDoor.leftDoor = jest.fn();
    newLeftDoor.draw();
    expect(newLeftDoor.leftDoor.mock.calls.length).toBe(1);
    expect(newLeftDoor.upDoor.mock.calls.length).toBe(0);
    expect(newLeftDoor.rightDoor.mock.calls.length).toBe(0);
    expect(newLeftDoor.downDoor.mock.calls.length).toBe(0);
})

test("Drawing a Door without direction will not draw a door anywhere", () => {
    let newDoor = new Door();
    newDoor.upDoor = jest.fn();
    newDoor.rightDoor = jest.fn();
    newDoor.downDoor = jest.fn();
    newDoor.leftDoor = jest.fn();
    newDoor.draw();
    expect(newDoor.leftDoor.mock.calls.length).toBe(0);
    expect(newDoor.upDoor.mock.calls.length).toBe(0);
    expect(newDoor.rightDoor.mock.calls.length).toBe(0);
    expect(newDoor.downDoor.mock.calls.length).toBe(0);
})