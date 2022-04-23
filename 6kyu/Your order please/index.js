/*
PSEUDOCODE
1. Write a function to sort a given string
2. Each word in the string will contain a single number
3. This number is the position the word should have in the result.
4. Numbers can be from 1 to 9. So 1 will be the first word (not 0).
5. If the input string is empty, return an empty string.
6. The words in the input String will only contain valid consecutive numbers.
*/

function order(words){
  return words.split(' ').sort(function(a, b){
      return a.match(/\d/) - b.match(/\d/);
   }).join(' ');
}  


module.exports = order