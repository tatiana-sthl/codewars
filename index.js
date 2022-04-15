/* 
PSEUDOCODE
1. Write a function that take a string.
2. And return a string without vowels.
*/

function disemvowel(str) {
  return str.match(/[^aeiou]/gi).join('');  
}

module.exports = disemvowel