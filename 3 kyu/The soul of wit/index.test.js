const {assert, config, util: {inspect}} = require('chai');
config.truncateThreshold = 0;

const codeSize = require('fs').statSync('/workspace/solution.txt').size;
console.log('<LOG::Code size>', codeSize);

describe('reverse', () => {
  it('should reverse arrays', () => {
    assert.deepEqual(reverse([1, 2, 3]), [3, 2, 1]);
    assert.deepEqual(reverse([...'01234567890123456789']), [...'98765432109876543210']);
    assert.deepEqual(reverse([0, undefined]), [undefined, 0]);
  });
});
