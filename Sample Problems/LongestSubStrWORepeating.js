/**
 * @param {string} s
 * @return {number}
 */

// var lengthOfLongestSubstring = function (s) {
//   let split_string = s.split("");

//   if (split_string.length === 0) {
//     return 0;
//   }

//   if (split_string.length === 1) {
//     return 1;
//   }

//   let counts = [];

//   for (let i = 0; i < split_string.length; i++) {
//     let pointer1 = i;
//     let pointer2 = i + 1;
//     let counter = 1;

//     let visited = new Map();
//     while (pointer2 < split_string.length) {
//       visited.set(split_string[pointer1], 1);
//       if (!visited.get(split_string[pointer2])) {
//         visited.set(split_string[pointer2], 1);
//         counter++;
//         pointer2++;
//       } else {
//         break;
//       }
//     }
//     if (counts.length === 0) {
//       counts.push(counter);
//     } else {
//       if (counter > counts[0]) {
//         counts[0] = counter;
//       }
//     }
//   }
//   return counts[0];
// };

////////////////////// using SLIDING WINDOW ALGO //////////////////////

// a b c d a
// ^ - - - ^

// a b c d a
// x ^ - - ^

// OR

// a b c d b
// ^ - - - ^

// a b c d b
// x ^ - - ^

// a b c d b
// x x ^ - ^

// remove first element from window until no duplicates

// var lengthOfLongestSubstring = function (s) {
//   let split = s.split("");

//   let seen = new Map();

//   let left = 0;

//   let max = Number.MIN_VALUE;

//   for (let right = 0; right < split.length; right++) {
//     console.log(left, right);
//     if (seen.get(split[right]) === undefined) {
//       max = Math.max(max, right - left + 1);
//     } else {
//       if (seen.get(split[right]) < left) {
//         max = Math.max(max, right - left + 1);
//       } else {
//         left = seen.get(split[right]) + 1;
//       }
//     }

//     seen.set(split[right], right);
//     console.log(left, right);
//   }

//   return max;
// };

//////////// further optimizing

var lengthOfLongestSubstring = function (s) {
  let seen = new Map();

  let left = 0;

  let max = 0;

  for (let right = 0; right < s.length; right++) {
    // console.log("start", left, right, seen);
    let char = s[right];

    // if char has been seen before and is in current
    // window range then shift window (move left pointer)
    if (seen.get(char) >= left) {
      left = seen.get(char) + 1;
    }

    // else keep moving right and update max
    seen.set(char, right);
    max = Math.max(max, right - left + 1);
    // console.log("end", left, right, seen);
  }
  console.log(seen);
  return max;
};

console.log(lengthOfLongestSubstring("aaaaa"));
