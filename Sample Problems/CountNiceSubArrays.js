// function countNiceSubarrays(k, arr) {
//   let res = [];

//   let count = k;

//   let left = 0;
//   let right = 0;

//   while (right < arr.length) {
//     if (arr[right] % 2) {
//       count--;
//     }

//     right++;

//     let leftref = left;
//     let rightref = right;

//     while (count === 0) {
//       let current = arr.slice(left, right);
//       res.push(current);

//       if (arr[++right] % 2) {
//         right = rightref;
//         if (arr[left] % 2) {
//           count++;
//         }
//         left++;
//       }

//       right++;
//       if (arr[right] % 2) {
//         count--;
//       }
//     }

//     if (count < 0) {
//       let current = arr.slice(left, right);
//       res.push(current);

//       if (arr[left] % 2) {
//         count++;
//       }
//       left++;
//     }
//   }

//   return res.length;
// }

// let k = 3;
// let arr = [1, 1, 2, 1, 1];

function countNiceSubarrays(k, arr) {
  let total = 0;
  let count = 0;
  let odd = 0;
  let left = 0;

  for (let right = 0; right < arr.length; right++) {
    // console.log(left, right);
    // if odd
    if (arr[right] % 2) {
      // increment odd counter
      odd++;
      // if odd count satisfied for first time OR if seeing another odd, then reset count to 1
      if (odd >= k) {
        count = 1;
        // while left is even
        // adding subarrays that contain odds up til the smallest subarray containing odds
        while (!(arr[left] % 2)) {
          count++;
          left++;
        }
        // if left is odd then just increment left
        left++;
        // while next left is even
        // while (!(arr[left++] % 2)) {
        //   count++;
        // }

        total += count;
      }
    } else if (odd >= k) {
      // if proceeding int is even and odd count is satisfied then there are "count" combos of subarrays with odds with this new int
      total += count;
    }
  }
  return total;
}

// https://leetcode.com/problems/count-number-of-nice-subarrays/discuss/508217/C%2B%2B%3A-Visual-explanation.-O(1)-space.-Two-pointers

let k = 2;
// let arr = [2, 4, 5, 7, 8, 10, 11, 12, 14, 15, 18, 20];
let arr = [2, 2, 1, 1, 2, 2, 1, 2];

console.log(countNiceSubarrays(k, arr));
