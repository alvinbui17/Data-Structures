// Javascript program to find
// the pair from two sorted arrays such
// that the sum of pair is closest
// to a given number x

// ar1[0..m-1] and ar2[0..n-1] are
// two given sorted arrays
// and x is given number.
// This function prints the pair
// from both arrays such that the
// sum of the pair is closest to x.
function printClosest(ar1, ar2, m, n, x) {
  // Initialize the diff
  // between pair sum and x.
  let diff = Number.MAX_VALUE;

  // res_l and res_r are result
  // indexes from ar1[] and ar2[]
  // respectively
  let res_l, res_r;

  // array to store pair(s)
  let res_arr = [];

  // Start from left side of ar1[] and
  // right side of ar2[]
  let l = 0,
    r = n - 1;
  while (l < m && r >= 0) {
    // If this pair is closer to
    // x than the previously
    // found closest, then update
    // res_l, res_r and diff
    if (Math.abs(ar1[l] + ar2[r] - x) <= diff) {
      if (Math.abs(ar1[l] + ar2[r] - x) < diff) {
        res_l = l;
        res_r = r;
        diff = Math.abs(ar1[l] + ar2[r] - x);

        res_arr = [[ar1[l], ar2[r]]];
      } else {
        res_l = l;
        res_r = r;
        diff = Math.abs(ar1[l] + ar2[r] - x);

        res_arr.push([ar1[l], ar2[r]]);
      }
    }

    // If sum of this pair is more than x,
    // move to smaller side
    if (ar1[l] + ar2[r] > x) r--;
    // move to the greater side
    else l++;
  }

  // Print the result
  return res_arr;
}

// driver code

let ar1 = [3, 5, 7, 10];
let ar2 = [2, 3, 4, 5];
let m = ar1.length;
let n = ar2.length;
let x = 10;
console.log(printClosest(ar1, ar2, m, n, x)); // [ [ 5, 5 ], [ 7, 3 ] ]
