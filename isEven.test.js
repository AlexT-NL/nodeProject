const isEven = require('./isEven')

describe('isEven', () => {

    it('checks that 2 is an even number', () => {
        expect(isEven(2)).toBe(true);
    }) 

    it('checks that 3 is not an even number', () => {
        expect(isEven(3)).toBe(false);
    }) 

    it('checks if negative 2 is an even number', () => {
        expect(isEven(-2)).toBe(true);
    })

    it('checks if negative 3 is not an even number', () => {
        expect(isEven(-3)).toBe(false);
    })

    it('checks if 0 is an even number', () => {
        expect(isEven(0)).toBe(true);
    })
})