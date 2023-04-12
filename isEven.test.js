const isEven = require('./isEven')

test('checks that 2 is an even number', () => {
    expect(isEven(2)).toBe(true);
}) 

test('checks that 3 is not an even number', () => {
    expect(isEven(3)).toBe(false);
}) 