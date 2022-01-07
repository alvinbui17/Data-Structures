var twoSum = function (nums, target) {
  let compMap = new Map();
  let res;

  nums.forEach((num, index) => {
    if (compMap.has(num)) {
      res = [index, compMap.get(num)];
      return;
    } else {
      let comp = target - num;
      compMap.set(comp, index);
    }
  });

  return res;
};

let nums = [2, 7, 11, 15];
let target = 9;

// console.log(twoSum(nums, target));

// O(n) time - we traverse array once
// O(n) space - worst case we store n items in hash map
