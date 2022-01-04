// O(log2(n)) --> O(log(n)

// for sorted array
const search = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] == target) {
      return mid;
    } else if (target < arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return;
};

function findNumber(arr, k) {
  //sort arr
  let sortedArr = arr.slice().sort((a, b) => a - b);

  //binary search
  let min = 0;
  let max = arr.length - 1;
  let midpoint;

  while (min <= max) {
    midpoint = Math.floor((min + max) / 2);
    if (sortedArr[midpoint] === k) {
      return "YES";
    } else if (sortedArr[midpoint] < k) {
      min = midpoint + 1;
    } else if (sortedArr[midpoint] > k) {
      max = midpoint - 1;
    }
  }
  //return string
  return "NO";
}

const array = [1, 2, 3, 4, 5];

console.log(search(array, 1));
