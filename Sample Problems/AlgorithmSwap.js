// Counting Inversions
// Merge Sort approach

// Reach base case, then during MERGE step:
//  for every merge,
//      if left[i] > right[j]:
//          inversion_count += mid - i inversions
const algoSwap = (arr) => {
  let inverseCount = 0;
  // helper function for below
  const merge = (inputArray, leftHalf, rightHalf) => {
    let leftSize = leftHalf.length;
    let rightSize = rightHalf.length;

    let i = 0;
    let j = 0;
    let k = 0;

    // until we reach the end of either left or right array
    while (i < leftSize && j < rightSize) {
      if (leftHalf[i] <= rightHalf[j]) {
        inputArray[k] = leftHalf[i];
        i++;
      } else {
        inverseCount += leftSize - i;
        inputArray[k] = rightHalf[j];
        j++;
      }
      k++;
    }

    // clean up for remaining values in either left or right array
    // since while loop breaks when the end of ONE array is reached

    while (i < leftSize) {
      inputArray[k] = leftHalf[i];
      i++;
      k++;
    }

    while (j < rightSize) {
      inputArray[k] = rightHalf[j];
      j++;
      k++;
    }

    return inverseCount;
  };

  const mergeSort = (arr) => {
    let inputLength = arr.length;

    // base case
    if (inputLength < 2) {
      return;
    }

    // recurse
    let midIndex = Math.floor(inputLength / 2);
    let leftHalf = new Array(midIndex);
    let rightHalf = new Array(inputLength - midIndex);

    for (let i = 0; i < midIndex; i++) {
      leftHalf[i] = arr[i];
    }

    for (let i = midIndex; i < inputLength; i++) {
      rightHalf[i - midIndex] = arr[i];
    }

    mergeSort(leftHalf);

    mergeSort(rightHalf);

    // merge from bottom up starting with arrays of single integers and then pass up array of 2 to previous call...

    merge(arr, leftHalf, rightHalf);
  };

  mergeSort(arr);

  console.log(inverseCount);

  return inverseCount;
};

let array = [7, 2, 3, 1];

algoSwap(array);
