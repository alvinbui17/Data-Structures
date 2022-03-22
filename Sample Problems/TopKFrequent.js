/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  // bucket sort
  let bucket = new Array(nums.length + 1);
  for (let i = 1; i < bucket.length; i++) {
    bucket[i] = new Array();
  }

  let res = [];

  let counts = new Map();

  for (num of nums) {
    if (counts.get(num) === undefined) {
      counts.set(num, 1);
    } else {
      counts.set(num, counts.get(num) + 1);
    }
  }

  // count (value) is the index and actual number that was counted is the key
  for (count of counts) {
    bucket[count[1]].push(count[0]);
  }

  let i = bucket.length - 1;
  while (res.length < k) {
    while (bucket[i].length) {
      res.push(bucket[i].pop());
    }
    i--;
  }
  return res;
};
