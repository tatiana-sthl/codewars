/*
PSEUDOCODE
1. Write a function to reverse an array
2. Return  the result
3. Don't use Array.prototype.reverse.
*/

reverse = (a) => a.map(a.pop, [...a]);

/*
reverse=a=>a.map(a.pop,[...a])
*/

module.exports = reverse;
