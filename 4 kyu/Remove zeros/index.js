/*
PSEUDOCODE
1. Write a function that takes an array of values
2. Moves all elements that are zero to the end of the array
3. Otherwise preserving the order of the array
4. The zero elements must also maintain the order in which they occurred.
*/

function removeZeros(array) {
  let limit = array.length;
  let tmp;
  for (let i = 0; i < limit; i++) {
      if (array[i] === 0 || array[i] === "0") {
          tmp = array[i];
          for (let j = i--; j < array.length-1; j++) {
                  array[j] = array[j+1];
              }
              array[array.length-1] = tmp;
              limit --;
      }
  }
  return array;
}

/*
function removeZeros(array) {
  const head = []
  const tail = []
  for (const e of array) {
    if (e === 0 || e === "0") {
      tail[tail.length] = e
    } else {
      head[head.length] = e
    }
  }
  return [...head, ...tail]
}
*/

module.exports = removeZeros;
