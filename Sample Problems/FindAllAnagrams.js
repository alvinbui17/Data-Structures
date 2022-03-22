/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  let res = [];
  let map = {};

  for (let char of p) {
    if (map[char]) {
      map[char]++;
    } else {
      map[char] = 1;
    }
  }

  let count = p.length;
  let left = 0;
  let right = 0;

  while (right < s.length) {
    // if current character is in p and we still want to count it
    // do not decrement if character is over the count needed in p
    if (map[s[right]] > 0) {
      count--;
    }

    map[s[right]]--;
    right++;

    if (count === 0) {
      res.push(left);
    }

    if (right - left === p.length) {
      // if we didn't count it when we first saq it then no need to increment here
      if (map[s[left]] >= 0) {
        count++;
      }

      map[s[left]]++;
      left++;
    }
  }
  return res;
};
