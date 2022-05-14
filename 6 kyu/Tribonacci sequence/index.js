/*
PSEUDOCODE
1. Write a fibonacci function that given a signature array/list
2. Returns the first n elements - signature included of the so seeded sequence
3. Signature will always contain 3 numbers
4. n will always be a non-negative number
5. If n == 0, then return an empty array
*/

function tribonacci(signature, n) {
  if (n === 0) {
    return [];
  } else if (n === 1) {
    return [1];
  } else {
    for (let i = 3; i <= n; i++) {
      signature[i] = signature[i - 1] + signature[i - 2] + signature[i - 3];
    }
    signature.pop();
    return signature;
  }
}

/*
function tribonacci(signature,n){  
  for (var i = 0; i < n-3; i++) { // iterate n times
    signature.push(signature[i] + signature[i+1] + signature[i+2]); // add last 3 array items and push to trib
  }
  return signature.slice(0, n); //return trib - length of n
}
*/

module.exports = tribonacci;
