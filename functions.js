'use strict';

function capitalize(word) {
	let wordArray = [];

	for (let i = 0; i < word.length; i++) {
		const letter = word[i];

		if (i === 0) {
			wordArray.push(letter.toUpperCase());
		} else {
			wordArray.push(letter);
		}
	}

	const capitalizedWord = wordArray.join('');

	return capitalizedWord;
}

function reverseString(string) {

	let stringArray = stringToArray(string)

	stringArray.reverse(); // array is altered.

	const reversedString = stringArray.join('');
	return reversedString;
}

const calculator = {
	add(a, b) {
		return a + b;
	},
	subtract(a, b) {
		return a - b;
	},
	multiply(a, b) {
		return a * b;
	},
	divide(a, b) {
		return a / b;
	},
};

const cypher = {
	alphabet: 'abcdefghijklmnopqrstuvwxyz',
};
// module.exports = capitalize;

export { capitalize, reverseString, calculator };

function stringToArray(string) {
	let stringArray = [];

	for (let i = 0; i < string.length; i++) {
		const symbol = string[i];
		stringArray.push(symbol);
	}
    return stringArray;
}
