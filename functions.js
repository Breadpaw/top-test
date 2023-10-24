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
	let stringArray = [];

	for (let i = 0; i < string.length; i++) {
		const letter = string[i];

		stringArray.push(letter);
	}

	stringArray.reverse(); // array is altered.

	const reversedString = stringArray.join('');
    return reversedString;
}

// module.exports = capitalize;

export { capitalize, reverseString };
