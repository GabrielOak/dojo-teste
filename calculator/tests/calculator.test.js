const { it } = require('@jest/globals');
const Calculator = require('../src/Calculator');

describe('Test Calculator', () =>{

    const calc = new Calculator();

    it('Test calc', () =>{ 
        expect(calc).toBeDefined();
    })

    it('Test sum', () => { 
        expect(calc.sum(5,5)).toBe(10);
        expect(calc.sum(5,5)).toEqual(10);
        expect(calc.sum(5,5)).not.toBe(0);
    })

    it('Test sub', () => { 
        expect(calc.sub(5,5)).toBe(0);
        expect(calc.sub(5,5)).toEqual(0);
        expect(calc.sub(5,5)).not.toBe(10);
    })

    it('Test mul', () => { 
        expect(calc.mul(2,5)).toBe(10);
        expect(calc.mul(5,5)).toEqual(25);
        expect(calc.mul(5,5)).not.toBe(1);
    })

})