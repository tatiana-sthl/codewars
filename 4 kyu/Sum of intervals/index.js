/*
PSEUDOCODE
1. Write a function that accepts an array of intervals
2. Return the sum of all the interval lengths
3. Overlapping intervals should only be counted once
*/

function sumIntervals(intervals){
  return intervals
  .sort((x,y)=>x[0]-y[0])
  .reduce((res, next) => {
    var newEnd = Math.max(next[1], res.end);
    res.sum += newEnd - Math.max(next[0], res.end);
    res.end = newEnd;
    return res;
  }, 
  {sum: 0, end: -Infinity})
  .sum;
}


module.exports = sumIntervals