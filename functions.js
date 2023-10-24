"use strict"

function capitalize(word){

    let wordArray = [];

    for (let i = 0; i < word.length; i++) {
        const letter = word[i];

        if(i === 0){
            wordArray.push(letter.toUpperCase());
        } else {

        wordArray.push(letter);
        }
    }

    capitalizedWord = wordArray.join('');

    return capitalizedWord;
}

// module.exports = capitalize;

export {capitalize}