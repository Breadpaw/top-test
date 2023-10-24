import {capitalize, reverseString, calculator, Cypher} from './functions'

// Capitalize String

test('String: Capitalize first letter', () => {
    expect(capitalize('laurens')).toMatch('Laurens');
});

// Reverse String

test('String: Reverse string', () => {
    expect(reverseString('laurens')).toMatch('snerual');
});

// Calculator

test('Calculator: add', () => {
    expect(calculator.add(2,3)).toEqual(5);
})

test('Calculator: subtract', () => {
    expect(calculator.subtract(10,3)).toEqual(7);
})

test('Calculator: multiply', () => {
    expect(calculator.multiply(3,7)).toEqual(21);
})

test('Calculator: divide', () => {
    expect(calculator.divide(6,4)).toBeCloseTo(1.5);
})

// Cypher

test('Cypher: Encypher', () => {
    const c = new Cypher();
    expect(c.encypher('abcz',3)).toMatch('defc');
})
