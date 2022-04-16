/*
PSEUDOCODE
1. Write a function to remove the spaces to the string 
2. Return the result
*/

function noSpace(x){
  return x.replace(/\s/g, '');
}

module.exports = noSpace