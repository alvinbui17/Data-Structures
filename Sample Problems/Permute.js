/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let result = [];
  console.log(nums);
  if (nums.toString().length === 1) {
    return [[nums]];
  }

  for (let i; i < nums.length; i++) {
    let n = nums.pop();
    let perms = permute(nums);

    perms.forEach((perm) => {
      perm.push(n);
    });
    result.push(perms);
    nums.push(n);
  }

  return result;
};

console.log(permute(1));
