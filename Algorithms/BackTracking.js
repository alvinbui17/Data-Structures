function permutations(letters) {
  let res = [];

  let dfs = (letters, path, used) => {
    // exit case
    if (path.length === letters.length) {
      res.push(JSON.parse(JSON.stringify(path)));
      return;
    }

    for (let i = 0; i < letters.length; i++) {
      // skip used letters
      if (used[i] === true) continue;
      // add letter to permutation and mark used
      path.push(letters[i]);
      used[i] = true;
      dfs(letters, path, used);
      // remove letter from permutation and mark unused
      path.pop();
      used[i] = false;
    }
  };

  dfs(letters, [], new Array(letters.length).fill(false));
  return res;
}

console.log(permutations(["a", "b", "c"]));

function letterCombinationsOfPhoneNumber(digits) {
  const KEYBOARD = {
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

  let dfs = (digits, path) => {
    // exit case
    if (path.length === digits.length) {
      res.push(JSON.parse(JSON.stringify(path)).join(""));
      return;
    }

    let nextDigit = digits[path.length];

    for (let letter of KEYBOARD[nextDigit]) {
      path.push(letter);
      dfs(digits, path);
      path.pop();
    }
  };

  dfs(digits, []);
  return res;
}

console.log(letterCombinationsOfPhoneNumber("56"));
