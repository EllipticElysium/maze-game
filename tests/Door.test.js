const { test } = require('@jest/globals');
const { TestResult } = require('@jest/types');
const Door = require('../Door');

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
