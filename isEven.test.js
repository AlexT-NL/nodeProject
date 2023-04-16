const isEven = require('./isEven')

test('checks that 2 is an even number', () => {
    expect(isEven(2)).toBe(true);
}) 

test('checks that 3 is not an even number', () => {
    expect(isEven(3)).toBe(false);
}) 

test('checks if negative 2 is an even number', () => {
    expect(isEven(-2)).toBe(true);
})

test('checks if negative 3 is not an even number', () => {
    expect(isEven(-3)).toBe(false);
})

test('checks if 0 is an even number', () => {
    expect(isEven(0)).toBe(true);
})