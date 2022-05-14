/*
PSEUDOCODE
1. Write a function that would take a morse code
2. Return a decoded human-readable string
*/

const decodeLetter = (letter) => {
  return MORSE_CODE[letter];
};

const decodeWord = (word) => {
  return word.split(' ').map(decodeLetter).join('');
};

const decodeMorse = (morseCode) => {
  return morseCode.trim().split('   ').map(decodeWord).join(' ');
};

module.exports = decodeMorse;
