/*
PSEUDOCODE
1. Write a function that takes a string of parentheses
2. Determines if the order of the parentheses is valid
3. The function should return true if the string is valid, and false if it's invalid
*/

function validParentheses(parens){
  let parenArr = [];
  let parenObj = {'(': ')'}
  for (let i = 0; i < parens.length; i++) {
      if (parens[i] === '(') {
          parenArr.push(parens[i]);
      }
      else {
          let last = parenArr.pop(); 
          if (parens[i] !== parenObj[last]) {
            return false
          }
      }
  }
  if (parenArr.length !== 0) {
    return false
  }
  return true;
}

/*
function validParentheses(parens){
  var n = 0;
  for (var i = 0; i < parens.length; i++) {
    if (parens[i] == '(') n++;
    if (parens[i] == ')') n--;
    if (n < 0) return false;
  }
  
  return n == 0;
}
*/

module.exports = validParentheses