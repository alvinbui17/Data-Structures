// O(log2(n)) --> O(log(n)

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

const array = [1, 2, 3, 4, 5];

console.log(search(array, 1));
