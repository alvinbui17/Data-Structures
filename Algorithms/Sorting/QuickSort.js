// choose pivot
// partition
// recursively quicksort all elements to left/right of pivot

const quickSort = (
  inputArray,
  lowIndex = 0,
  highIndex = inputArray.length - 1
) => {
  // walk left pointer from left until you find number > pivot
  // walk right pointer from right until you find number < pivot
  // then swap
  // when LP and RP are on same index, swap that index with pivot

  // if quickSort is called with array of size 1
  if (lowIndex >= highIndex) {
    return;
  }

  let pivot = inputArray[highIndex];
  let leftPointer = lowIndex;
  let rightPointer = highIndex;

  while (leftPointer < rightPointer) {
    while (inputArray[leftPointer] <= pivot && leftPointer < rightPointer) {
      leftPointer++;
    }
    while (inputArray[rightPointer] >= pivot && leftPointer < rightPointer) {
      rightPointer--;
    }
    [inputArray[leftPointer], inputArray[rightPointer]] = [
      inputArray[rightPointer],
      inputArray[leftPointer],
    ];
  }

  // swap pivot with index where LP and RP meet
  [inputArray[highIndex], inputArray[leftPointer]] = [
    inputArray[leftPointer],
    inputArray[highIndex],
  ];

  // recursively quickSort

  // left
  quickSort(inputArray, lowIndex, leftPointer - 1);
  //right
  quickSort(inputArray, leftPointer + 1, highIndex);

  //   console.log(inputArray);
  return inputArray;
};

let array = [1, 6, 5, 4, 2];

console.log(quickSort(array));
