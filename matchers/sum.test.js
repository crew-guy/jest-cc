const  sum = require('./sum');


describe("basic func and equality", () => {
    it('should add 2 numbers to return sum', () => {
        const result = sum(1, 2);
        expect(result).toBe(3);
    })
    it('object assignment', () => {
        const n = {}
        expect(n).toEqual({});
    })
})

describe('truthy and falsy', () => {
    it('tests for T, F val', () => {
        const n = "";
        expect(n).toBeFalsy();
        expect(n).not.toBeTruthy();
        expect(n).not.toBeNull()
        expect(n).not.toBeUndefined();
    })
})

describe('numbers', () => {
    it('value ops', () => {
        const value = 2 + 2;
        expect(value).toBe(4);
        expect(value).toBeGreaterThanOrEqual(4);
        expect(value).toBeLessThan(7);
        expect(value).toBeLessThanOrEqual(4);
    })

    it('adding floats', () => {
        const value = 0.2 + 0.1;
        expect(value).toBeCloseTo(0.299999999)
    })
})

describe('strings', () => {
    it('There is no I in team', () => {
        expect('team').not.toBe(/I/);
    })
})

describe('arrays', () => {
    const shoppingLists = [
        'apple','mango','banana'
    ]
    expect(shoppingLists).toContain('mango')
})

const compileAndroidCode = () => {
    throw new Error('you are using wrong JDK')
};


describe('exception', () => {
    it("compile code through wrong JDK", () => {
        expect(()=>compileAndroidCode()).toThrow('you are using wrong JDK')
    })
})