function groupAnagrams(strs) {
  let map = new Map();

  for (let str of strs) {
    let id = str.split("").sort().join("");
    if (map.get(id)) {
      map.get(id).push(str);
    } else {
      map.set(id, [str]);
    }
  }

  let values = [];

  for (let [key, value] of map.entries()) {
    value = value.sort();
    values.push(value);
  }

  values.sort();

  return values;
}

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
