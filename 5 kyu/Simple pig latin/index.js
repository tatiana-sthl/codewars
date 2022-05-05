/*
PSEUDOCODE
1. Write a function to move the first letter of each word to the end of it
2. Add "ay" to the end of the word
3. Leave punctuation marks untouched
*/

function pigIt(str) {
  let strArr = str.split(' ');
  let pigLatin = [];

  for (let word of strArr) {
    if (/([a-zA-Z])/.test(word)) {
      pigLatin.push(word.substring(1) + word[0] + 'ay');
    } else {
      pigLatin.push(word);
    }
  }
  return pigLatin.join(' ');
}

/*
function pigIt(str){
  return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
}
*/

module.exports = pigIt;
