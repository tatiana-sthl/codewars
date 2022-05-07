/*
PSEUDOCODE
1. Write a function which will take an array of strings
2. Returns an array of strings with the needless directions removed (W<->E or S<->N side by side)
*/

function dirReduc(arr) {
  let i = 0;
  while (i < arr.length) {
    if (
      (arr[i] === 'NORTH' && arr[i + 1] === 'SOUTH') ||
      (arr[i] === 'SOUTH' && arr[i + 1] === 'NORTH') ||
      (arr[i] === 'EAST' && arr[i + 1] === 'WEST') ||
      (arr[i] === 'WEST' && arr[i + 1] === 'EAST')
    ) {
      arr.splice(i, 2);
      i = 0;
    } else {
      i++;
    }
  }
  return arr;
}

/*
function dirReduc(plan) {
  var opposite = {
    'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST'};
  return plan.reduce(function(dirs, dir){
      if (dirs[dirs.length - 1] === opposite[dir])
        dirs.pop();
      else
        dirs.push(dir);
      return dirs;
    }, []);
}
*/

module.exports = dirReduc;
