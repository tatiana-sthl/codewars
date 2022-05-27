/*
PSEUDOCODE
1. Write a function to implement a function
2. Return the number of possible patterns starting from a given first point, that have a given length.
*/

let CONNECTIONS = {
  A: ['B', 'CB', 'D', 'E', 'F', 'GD', 'H', 'IE'],
  B: ['A', 'C', 'D', 'E', 'F', 'G', 'HE', 'I'],
  C: ['B', 'AB', 'D', 'E', 'F', 'GE', 'H', 'IF'],
  D: ['A', 'B', 'C', 'E', 'FE', 'G', 'H', 'I'],
  E: ['A', 'B', 'C', 'D', 'F', 'G', 'H', 'I'],
  F: ['A', 'B', 'C', 'DE', 'E', 'G', 'H', 'I'],
  G: ['AD', 'B', 'CE', 'D', 'E', 'F', 'H', 'IH'],
  H: ['A', 'BE', 'C', 'D', 'E', 'F', 'G', 'I'],
  I: ['AE', 'B', 'CF', 'D', 'E', 'F', 'GH', 'H'],
};

const posibleConnections = (point, visited) => {
  return CONNECTIONS[point].reduce((res, pos) => {
    let [dest, over] = pos.split('');
    if (visited.indexOf(dest) === -1 && (!over || visited.indexOf(over) !== -1))
      res.push(dest);
    return res;
  }, []);
};

const countPatternsFrom = (pattern, max) => {
  let total = 0;
  if (pattern.length > max) return total;
  if (pattern.length === max) return total + 1;
  let last = pattern.slice(-1);
  let posible = posibleConnections(last, pattern);
  if (pattern.length + 1 === max) return posible.length;
  for (newPosition of posible) {
    total += countPatternsFrom(pattern + newPosition, max);
  }
  return total;
};

/*
const memo={
  'A':[0,1,5,31,154,684,2516,7104,13792,13792],
  'B':[0,1,7,37,188,816,2926,8118,15564,15564],
  'C':[0,1,5,31,154,684,2516,7104,13792,13792],
  'D':[0,1,7,37,188,816,2926,8118,15564,15564],
  'E':[0,1,8,48,256,1152,4248,12024,23280,23280],
  'F':[0,1,7,37,188,816,2926,8118,15564,15564],
  'G':[0,1,5,31,154,684,2516,7104,13792,13792],
  'H':[0,1,7,37,188,816,2926,8118,15564,15564],
  'I':[0,1,5,31,154,684,2516,7104,13792,13792]
};

function countPatternsFrom(start, length) {
  return memo[start][length]||0;
}
*/
