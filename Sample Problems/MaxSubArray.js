/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let max = nums[0];
  let sum = 0;
  // let indices

  // let left = 0
  let right = 0;

  while (right < nums.length) {
    if (sum < 0) {
      sum = 0;
      // left = right
    }

    sum += nums[right];

    right++;

    if (sum > max) {
      max = sum;
      // indices = [left, right]
    }
    console.log(max);
  }
  // console.log(nums.slice(indices[0], indices[1]))
  return max;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
