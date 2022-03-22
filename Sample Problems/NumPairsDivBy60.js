/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function (time) {
  let compMap = {};

  let count = 0;

  for (let t of time) {
    // if complementary remainder exists then update count
    if (compMap[60 - (t % 60)]) {
      count += compMap[60 - (t % 60)];
    }

    // 0 complementary edge case
    else if (t % 60 === 0 && compMap[0]) {
      count += compMap[0];
    }

    // add/update remainder of current t in compMap
    if (compMap[t % 60]) {
      compMap[t % 60]++;
    } else {
      compMap[t % 60] = 1;
    }
  }

  return count;
};
