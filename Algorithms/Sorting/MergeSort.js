const mergeSort = (inputArray) => {
  let inputLength = inputArray.length;

  // base case
  if (inputLength < 2) {
    return;
  }

  // recurse
  let midIndex = Math.floor(inputLength / 2);
  let leftHalf = new Array(midIndex);
  let rightHalf = new Array(inputLength - midIndex);

  for (let i = 0; i < midIndex; i++) {
    leftHalf[i] = inputArray[i];
  }

  for (let i = midIndex; i < inputLength; i++) {
    rightHalf[i - midIndex] = inputArray[i];
  }

  mergeSort(leftHalf);

  mergeSort(rightHalf);

  // merge from bottom up starting with arrays of single integers and then pass up array of 2 to previous call...

  merge(inputArray, leftHalf, rightHalf);

  console.log(inputArray);
  return inputArray;
};

// helper function for above
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
};

let array = [3, 4, 2, 1];

mergeSort(array);
