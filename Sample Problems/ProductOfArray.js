// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// var productExceptSelf = function (nums) {
//   let res = new Array(nums.length);
//   for (let i = 0; i < nums.length; i++) {
//     let left = i - 1;
//     let right = i + 1;

//     let leftProduct = 1;
//     let rightProduct = 1;

//     while (left >= 0) {
//       leftProduct *= nums[left];
//       left--;
//     }
//     while (right < nums.length) {
//       rightProduct *= nums[right];
//       right++;
//     }

//     res[i] = leftProduct * rightProduct;
//   }
//   return res;
// };

/**
 * @param {number[]} nums
 * @return {number[]}
 */

// achieves O(1) space because problem specifies that output array will not count towards extra space

var productExceptSelf = function (nums) {
  let res = new Array(nums.length);

  // calculate left products for each num and insert into output array
  res[0] = 1;
  let right = 1;

  for (let i = 1; i < nums.length; i++) {
    res[i] = nums[i - 1] * res[i - 1];
  }

  // keep a running count for right product and multiply to each left product in output array
  for (let i = nums.length - 2; i >= 0; i--) {
    right = right * nums[i + 1];
    res[i] = res[i] * right;
  }

  return res;
};
