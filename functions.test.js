import {
	capitalize,
	reverseString,
	calculator,
	Cypher,
	analyzeArray,
	stringToArray,
} from './functions';

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
	expect(calculator.add(2, 3)).toEqual(5);
});

test('Calculator: subtract', () => {
	expect(calculator.subtract(10, 3)).toEqual(7);
});

test('Calculator: multiply', () => {
	expect(calculator.multiply(3, 7)).toEqual(21);
});

test('Calculator: divide', () => {
	expect(calculator.divide(6, 4)).toBeCloseTo(1.5);
});

// Cypher

test('Cypher: Encypher. Case sensitive, A-Z wrap, interpunction', () => {
	const c = new Cypher();
	expect(c.encypher('We ride at dawn, bitches!', 5)).toMatch('Bj wnij fy ifbs, gnyhmjx!');
});

test('Cypher: Decypher. Case sensitive, A-Z wrap, interpunction', () => {
	const c = new Cypher();
	expect(c.decypher('Mn pnrc rb pnvxutnw!;', 9)).toMatch('De geit is gemolken!;');
});

test('AnalyzeArray', () => {
	expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
		average: 4,
		min: 1,
		max: 8,
		length: 6,
	});
});

test('String to array helper method', () => {
	expect(stringToArray('Wouter?%\'')).toEqual(['W','o','u','t','e','r','?','%','\'']);
});

// write test for string to array