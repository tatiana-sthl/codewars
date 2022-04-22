/*
PSEUDOCODE
1. Write a function that takes an array of function
2. Return a sum of numbers
3. The number can be neagtive or non-integer
4. If the array does not contain any array, should return 0
*/

function sum(numbers) {
  return numbers.reduce((res,v) => res+v,0);
}

module.exports = sum;
