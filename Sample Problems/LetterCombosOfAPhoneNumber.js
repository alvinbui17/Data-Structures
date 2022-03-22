/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  let map = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  let res = [];

  const backtrack = (i, currentStr) => {
    if (currentStr.length === digits.length) {
      res.push(currentStr);
      return;
    }

    for (letter of map[digits[i]]) {
      backtrack(i + 1, currentStr + letter);
    }
  };

  if (digits.length) {
    backtrack(0, "");
  }

  return res;
};
