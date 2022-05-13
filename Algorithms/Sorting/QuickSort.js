// // choose pivot
// // partition
// // recursively quicksort all elements to left/right of pivot

const quickSort = (unsortedList, low = 0, high = unsortedList.length - 1) => {
  // walk left pointer from left until you find number > pivot
  // walk right pointer from right until you find number < pivot
  // then swap
  // when LP and RP are on same index, swap that index with pivot

  // if quickSort is called with array of size 1
  if (low >= high) return;

  let pivot = high;
  let left = low;
  let right = high;

  while (left < right) {
    // walk from left to get first element greater than pivot
    while (left < right && unsortedList[left] <= unsortedList[pivot]) left++;

    // walk from right to get first element less than pivot
    while (left < right && unsortedList[right] >= unsortedList[pivot]) right--;

    // swap
    [unsortedList[left], unsortedList[right]] = [
      unsortedList[right],
      unsortedList[left],
    ];
  }

  // swap pivot with left pointer
  [unsortedList[pivot], unsortedList[left]] = [
    unsortedList[left],
    unsortedList[pivot],
  ];

  // recurse on sections left and right of pivot
  quickSort(unsortedList, low, left - 1);
  quickSort(unsortedList, left + 1, high);

  return unsortedList;
};

let array = [1, 6, 5, 4, 2];

console.log(quickSort(array));
