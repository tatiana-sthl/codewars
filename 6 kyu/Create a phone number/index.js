/*
PSEUDOCODE
1. Write a function that accept an array of ten integers (0 to 9)
2. Return a string of those numbers in the form of a phone number
*/

function createPhoneNumber(numbers) {
  let format = '(xxx) xxx-xxxx';

  for (let i = 0; i < numbers.length; i++) {
    format = format.replace('x', numbers[i]);
  }

  return format;
}

module.exports = createPhoneNumber;
