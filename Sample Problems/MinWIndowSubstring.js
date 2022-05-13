function getMinimumWindow(original, check) {
  let res = "";
  let map = {};

  // similar to find all anagrams
  // we will use this map to keep track of needed chars and when to incr/decr count
  for (let char of check) {
    if (!map[char]) map[char] = 1;
    else map[char]++;
  }

  let left = 0;
  let right = 0;

  let count = check.length;

  while (right < original.length) {
    let char = original[right];

    // if char is needed for anagram and has not been exhausted ie. found a useful char then decr count
    if (map[char] > 0) count--;
    map[char]--;
    right++;

    // if count is zero then we have found anagram
    // now we shorten the found string until the anagram is no longer satisfied
    // record shortest/sorted strings as you shorten
    while (count === 0) {
      let current = original.slice(left, right);

      if (res === "") res = current;
      // update with all shorter strings
      else if (current.length < res.length) {
        res = current;
        // if same length we want the one that comes first lexographically
      } else if (current.length === res.length && current < res) {
        res = current;
      }

      // if string was needed for anagram we want to restore count
      if (map[original[left]] >= 0) {
        count++;
      }

      // restore count in map so we can make decision in decr count at top
      map[original[left]]++;
      left++;
    }
  }
  return res;
}

let original = "AEOIEAIOUAOEIAOEIIAAEIUIOUUA";
let check = "AEIOU";

console.log(getMinimumWindow(original, check));

// O(n)/O(n)
