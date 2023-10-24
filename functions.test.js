import {capitalize, reverseString, calculator} from './functions'

// Capitalize String

test('String: Capitalize first letter', () => {
    expect(capitalize('laurens')).toMatch('Laurens');
});

// Reverse String

test('String: Reverse string', () => {
    expect(reverseString('laurens')).toMatch('snerual');
});

// Calculator

test('Calculator: add function', () => {
    expect(calculator.add(2,3)).toEqual(5);
})

test('Calculator: subtract function', () => {
    expect(calculator.subtract(10,3)).toEqual(7);
})

test('Calculator: multiply function', () => {
    expect(calculator.multiply(3,7)).toEqual(21);
})

test('Calculator: divide function', () => {
    expect(calculator.divide(6,4)).toBeCloseTo(1.5);
})