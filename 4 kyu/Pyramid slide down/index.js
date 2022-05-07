/*
PSEUDOCODE
1. Write a function that takes a pyramid representation as argument
2. Returns its' largest 'slide down'.
*/

function longestSlideDown(pyramid) {
  let pyramidSum = [];
  pyramid.forEach((elem, index) => {
    pyramidSum.push(
      elem.map((e) => {
        return index === pyramid.length - 1 ? e : 0;
      })
    );
  });
  for (let i = pyramidSum.length - 2; i >= 0; i--) {
    for (let j = 0; j < pyramidSum[i].length; j++) {
      pyramidSum[i][j] =
        pyramid[i][j] +
        Math.max(pyramidSum[i + 1][j], pyramidSum[i + 1][j + 1]);
    }
  }
  return pyramidSum[0][0];
}

/*
function longestSlideDown (pyramid) {
  return pyramid.reduceRight((last,current)=>current.map(
    (v,i)=>v+Math.max(last[i],last[i+1])
  ))[0];
}
*/

module.exports = longestSlideDown;
