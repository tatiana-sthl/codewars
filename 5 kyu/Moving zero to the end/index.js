/*
PSEUDOCODE
1. Write a function that takes an array and moves all of the zeros to the end
2. Preserving the order of the other elements.
*/

const moveZeros = (arr = []) => {
   const res = [];
   let currIndex = 0;
   for(let i = 0; i < arr.length; i++){
      const el = arr[i];
      if(el === 0){
         res.push(0);
      }else{
         res.splice(currIndex, undefined, el);
         currIndex++;
      };
   };
   return res;
};
console.log(moveZeros(arr));

/*
var moveZeros = function (arr) {
  return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
}
*/

module.exports = /* function name */