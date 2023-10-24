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


class Cypher {
	constructor(){
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
		
		// return
	}

	// Private Functions

	#lookUpShiftedSymbol(symbol){
		if(!symbol.match(/[a-z]/i)){
			return symbol;
		} else {
			const index = this.alphabetArray.indexOf(symbol)
			let shiftedIndex = index + this.shift

			// in case index surpasses alphabet length, start at beginning
			if(shiftedIndex > 26) {
				shiftedIndex -= 26;
			} else if (shiftedIndex < 0) {
				shiftedIndex += 26;
			}
			return this.alphabetArray[shiftedIndex];
		}
	}

	#constructNewString(){
		const originalStringArray = stringToArray(this.string)
		let encypheredStringArray = [];

		for (let i = 0; i < this.string.length; i++) {
			encypheredStringArray.push(this.#lookUpShiftedSymbol(this.string[i]))
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

export { capitalize, reverseString, calculator, Cypher };