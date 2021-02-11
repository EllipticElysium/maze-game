const { test, expect } = require('@jest/globals');
const Door = require('../Door');

test('A door is initially disabled', () => {
    let newDoor = new Door();
    expect(newDoor.status).toBe('disabled');
})