let array = [3, 4, 1, 2, 9];

const insertionSort = (arr) => {
  let current = 0;

  while (current < arr.length) {
    while (
      arr[current] &&
      arr[current - 1] &&
      arr[current] < arr[current - 1]
    ) {
      [arr[current], arr[current - 1]] = [arr[current - 1], arr[current]];
      current--;
    }
    current++;
  }
  console.log(arr);
};

insertionSort(array);
