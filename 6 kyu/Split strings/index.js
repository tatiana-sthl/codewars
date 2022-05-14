/*
PSEUDOCODE
1. Write a function that it splits the string into pairs of two characters
2. If the string contains an odd number of characters,
3. Then it should replace the missing second character of the final pair with an underscore ('_')
*/

function solution(str) {
  const array = str.split('');
  const result = [];

  for (let i = 0; i < array.length; i += 2) {
    if (array[i + 1]) result.push(array[i] + array[i + 1]);
    else result.push(array[i] + '_');
  }
  return result;
}

/* function solution(s){
   return (s+"_").match(/.{2}/g)||[]
} 
*/

module.exports = solution;
