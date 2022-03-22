// // Javascript program to find
// // the pair from two sorted arrays such
// // that the sum of pair is closest
// // to a given number x

// // ar1[0..m-1] and ar2[0..n-1] are
// // two given sorted arrays
// // and x is given number.
// // This function prints the pair
// // from both arrays such that the
// // sum of the pair is closest to x.
// function printClosest(ar1, ar2, m, n, x) {
//   // Initialize the diff
//   // between pair sum and x.
//   let diff = Number.MAX_VALUE;

//   // res_l and res_r are result
//   // indexes from ar1[] and ar2[]
//   // respectively
//   let res_l, res_r;

//   // array to store pair(s)
//   let res_arr = [];

//   // Start from left side of ar1[] and
//   // right side of ar2[]
//   let l = 0,
//     r = n - 1;
//   while (l < m && r >= 0) {
//     // If this pair is closer to
//     // x than the previously
//     // found closest, then update
//     // res_l, res_r and diff
//     if (Math.abs(ar1[l] + ar2[r] - x) <= diff) {
//       if (Math.abs(ar1[l] + ar2[r] - x) < diff) {
//         // res_l = l;
//         // res_r = r;
//         diff = Math.abs(ar1[l] + ar2[r] - x);

//         res_arr = [[ar1[l], ar2[r]]];
//       } else {
//         // res_l = l;
//         // res_r = r;
//         diff = Math.abs(ar1[l] + ar2[r] - x);

//         res_arr.push([ar1[l], ar2[r]]);
//       }
//     }

//     // If sum of this pair is more than x,
//     // move to smaller side
//     if (ar1[l] + ar2[r] > x) r--;
//     // move to the greater side
//     else l++;
//   }

//   // Print the result
//   return res_arr;
// }

function applicationPairs(
  deviceCapacity,
  foregroundAppList,
  backgroundAppList
) {
  foregroundAppList.sort((a, b) => a[1] - b[1]);
  backgroundAppList.sort((a, b) => a[1] - b[1]);

  let res = [];
  // we will be comparing diffs between pair sum and capacity and choosing the smallest diff
  // initialize diff
  let diff = Number.MAX_VALUE;

  let m = foregroundAppList.length;
  let n = backgroundAppList.length;

  // pointers to traverse
  let left = 0;
  let right = n - 1;

  while (left < m && right >= 0) {
    // if current pair has smaller diff, then update diff
    if (
      Math.abs(
        foregroundAppList[left][1] +
          backgroundAppList[right][1] -
          deviceCapacity
      ) <= diff
    ) {
      if (
        Math.abs(
          foregroundAppList[left][1] +
            backgroundAppList[right][1] -
            deviceCapacity
        ) < diff
      ) {
        diff = Math.abs(
          foregroundAppList[left][1] +
            backgroundAppList[right][1] -
            deviceCapacity
        );

        res = [[foregroundAppList[left][0], backgroundAppList[right][0]]];
      } else {
        diff = Math.abs(
          foregroundAppList[left][1] +
            backgroundAppList[right][1] -
            deviceCapacity
        );

        res.push([foregroundAppList[left][0], backgroundAppList[right][0]]);
      }
    }
    if (
      foregroundAppList[left][1] + backgroundAppList[right][1] >
      deviceCapacity
    ) {
      right--;
    } else {
      left++;
    }
  }

  return res;
}
// driver code

// let ar1 = [3, 5, 7, 10];
// let ar2 = [2, 3, 4, 5];
// let m = ar1.length;
// let n = ar2.length;
// let x = 10;
// console.log(printClosest(ar1, ar2, m, n, x)); // [ [ 5, 5 ], [ 7, 3 ] ]

let arr1 = [
  [1, 3],
  [2, 5],
  [3, 7],
  [4, 10],
];

let arr2 = [
  [4, 5],
  [1, 2],
  [2, 3],
  [3, 4],
];

console.log(applicationPairs(10, arr1, arr2));
