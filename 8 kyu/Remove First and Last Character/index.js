/*
PSEUDOCODE
1. Write a function that remove the first and the last character of a string
2. One parameter : original string
*/

function removeChar(str) {
  return str.slice(1, -1);
}

/*
const removeChar = str => str.slice(1, -1);
*/

module.exports = removeChar
