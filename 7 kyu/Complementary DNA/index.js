/*
PSEUDOCODE
1. Write a function who receive one side of the DNA
2. Return the othe complementary side
*/

function DNAStrand(dna){
  return dna.replace(/./g, c => ({A: 'T', T: 'A', C: "G", G: 'C'}[c]));
}


module.exports = DNAStrand