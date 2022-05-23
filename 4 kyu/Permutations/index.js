/*
PSEUDOCODE
1. Write a function to create all permutations of a non empty input string 
2. And remove duplicates, if present.
*/

function permutations(str) {
  return (str.length <= 1) ? [str] :
          Array.from(new Set(
            str.split('')
               .map((char, i) => permutations(str.substr(0, i) + str.substr(i + 1)).map(p => char + p))
               .reduce((r, x) => r.concat(x), [])
          ));
 }



module.exports = permutations