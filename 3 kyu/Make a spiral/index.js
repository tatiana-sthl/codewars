/*
PSEUDOCODE
1. Write a function to create a NxN spiral with a given size
2. Return value should contain array of arrays, of 0 and 1, with the first row being composed of 1s
3. Because of the edge-cases for tiny spirals, the size will be at least 5.
4. General rule-of-a-thumb is, that the snake made with '1' cannot touch to itself.
*/

const spiralize = (n) => {
  return Array(n)
    .fill(Array(n).fill())
    .map((x, r) =>
      x.map((y, c) => {
        return +(
          // top
          (
            (r < n / 2 && r % 2 === 0 && c >= r - 2 && c <= n - r - 1) ||
            // right
            ((n - c) % 2 === 1 && r > n - c - 1 && r <= c) ||
            // bottom
            ((n - r) % 2 === 1 && c > n - r - 1 && c < r) ||
            // left
            (c % 2 === 0 && r > c + 1 && r < n - c)
          )
        );
      })
    );
};

/*
function spiralize(size) {
  if (size == 2) return [ [1,1], [0,1] ];
  if (size == 3) return [ [1,1,1], [0,0,1], [1,1,1] ];
  var base = spiralize(size-2);
  var res = [[],[]];
  for (var i = 0; i < size; i++) (res[0].push(1)) && (res[1].push(0));
  res[1][size-1] = 1;
  for (var i = size-3; i >= 0; i--) {
    res.push(base[i].reverse().concat([0,1]));
  }
  res[size-1][size-2] = 1;
  return res;
}
*/

module.exports = spiralize;
