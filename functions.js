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
	let stringArray = stringToArray(string);

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

class Cypher {
	constructor() {
		this.alphabetArray = stringToArray('abcdefghijklmnopqrstuvwxyz'); // store alphabet array for reference
	}

	// Public Functions

	encypher(string, shift) {
		this.string = string;
		this.shift = shift;

		let newString = this.#constructNewString();

		return newString;
	}

	decypher(string, shift) {
		this.string = string;
		this.shift = -shift;

		let newString = this.#constructNewString();

		return newString;
	}

	// Private Functions

	#lookUpShiftedSymbol(symbol) {
		const upperCase = symbol.match(/[A-Z]/) ? true : false;

		if (!symbol.match(/[a-z]/i)) {
			return symbol;
		} else {
			// change to lower case when searching in lower case array
			const index = this.alphabetArray.indexOf(symbol.toLowerCase());
			let shiftedIndex = index + this.shift;

			// in case index surpasses alphabet length, start at beginning
			if (shiftedIndex > 26) {
				shiftedIndex -= 26;
			} else if (shiftedIndex < 0) {
				shiftedIndex += 26;
			}

			const shiftedSymbol = this.alphabetArray[shiftedIndex];

			if (upperCase) {
				return shiftedSymbol.toUpperCase();
			} else {
				return shiftedSymbol;
			}
		}
	}

	#constructNewString() {
		const originalStringArray = stringToArray(this.string);
		let encypheredStringArray = [];

		for (let i = 0; i < this.string.length; i++) {
			encypheredStringArray.push(this.#lookUpShiftedSymbol(this.string[i]));
		}

		return encypheredStringArray.join('');
	}
}

function stringToArray(string) {
	let stringArray = [];

	for (let i = 0; i < string.length; i++) {
		const symbol = string[i];
		stringArray.push(symbol);
	}
	return stringArray;
}

function analyzeArray(array) {
	// average

	const totalValue = array.reduce(
		(previousValue, currentvalue) => previousValue + currentvalue
	);
	const average = totalValue / array.length;

	//min
	const lowestValue = array.reduce((previousValue, currentValue) => {
		if (previousValue < currentValue) {
			return previousValue;
		} else {
			return currentValue;
		}
	});

	//max
	const highestValue = array.reduce((previousValue, currentValue) => {
		if (previousValue > currentValue) {
			return previousValue;
		} else {
			return currentValue;
		}
	});

	//length

	const length = array.length;

	return {
		average: average,
		min: lowestValue,
		max: highestValue,
		length: length,
	};
}

export { capitalize, reverseString, calculator, Cypher, analyzeArray, stringToArray };
