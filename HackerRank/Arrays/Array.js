// reverse an array

const reverseArray = (arr) => {
  revArr = new Array();
  for (let i = arr.length - 1; i >= 0; i--) {
    revArr.push(arr[i]);
  }
  return revArr;
};

const hourglassSum = (arr) => {
  let arrOfSums = new Array();
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = 0; j < arr.length - 2; j++) {
      let sum =
        arr[i][j] +
        arr[i][j + 1] +
        arr[i][j + 2] +
        arr[i + 1][j + 1] +
        arr[i + 2][j] +
        arr[i + 2][j + 1] +
        arr[i + 2][j + 2];
      arrOfSums.push(sum);
    }
  }
  return Math.max(...arrOfSums);
};

// A left rotation operation on an array of size n shifts each of the array's elements 1 unit to the left.
// Given an integer, d, rotate the array that many steps left and return the result.

const leftRotation = (d, arr) => {
  for (let i = 0; i < d; i++) {
    let valToRotate = arr.shift();
    arr.push(valToRotate);
  }
  return arr;
};

const matchingStrings = (strings, queries) => {
  let countArr = new Array();

  queries.forEach((query) => {
    let count = 0;
    strings.forEach((string) => {
      if (query === string) {
        count++;
      }
    });
    countArr.push(count);
  });
  return countArr;
};

const arrayManipulation = (n, queries) => {
  let arr = new Array(n).fill(0);

  queries.forEach((query) => {
    arr[query[0] - 1] += query[2];
    arr[query[1]] += query[2] * -1;
  });

  let current = 0;
  arr.forEach((element) => {
    if (element > 0) {
      current += element;
    }
  });
  return current;
};

let n = 10;
let queries = [
  [2, 6, 8],
  [3, 5, 7],
  [1, 8, 1],
  [5, 9, 15],
];
console.log(arrayManipulation(n, queries));
