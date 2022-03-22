function isIsomorphic(str1, str2) {
  let isoMap1 = new Map();
  let isoMap2 = new Map();

  for (let char of str1) {
    if (isoMap1.get(char)) {
      isoMap1.set(char, isoMap1.get(char) + 1);
    } else {
      isoMap1.set(char, 1);
    }
  }

  for (let char of str2) {
    if (isoMap2.get(char)) {
      isoMap2.set(char, isoMap2.get(char) + 1);
    } else {
      isoMap2.set(char, 1);
    }
  }

  if (isoMap1.values().length !== isoMap2.values().length) {
    return false;
  }

  let res1 = [...isoMap1.values()].sort();
  let res2 = [...isoMap2.values()].sort();

  console.log(res1, res2);
  for (let i = 0; i < res1.length; i++) {
    if (res1[i] !== res2[i]) {
      return false;
    }
  }
  return true;
}

console.log(isIsomorphic("wowsdfsdf", "aaa"));
