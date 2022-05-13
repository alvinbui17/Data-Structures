const {
  PriorityQueue,
  MinPriorityQueue,
  MaxPriorityQueue,
} = require("@datastructures-js/priority-queue");

var kthSmallest = function (matrix, k) {
  let minQueue = new MaxPriorityQueue();

  for (let row of matrix) {
    for (let elem of row) {
      // O(logn)
      minQueue.enqueue(elem);
    }
  }

  while (minQueue.size() > k) {
    // O(logn)
    minQueue.dequeue();
  }

  return minQueue.front().element;

  // time: let n be num of rows, let m be num of elems in row -> O(n*m*logn)
  // space: O(n*m) for storing all elems in heap
};

// var kClosest = function (points, k) {
//   const squaredDistance = ([x, y]) => x ** 2 + y ** 2;

//   points.sort((a, b) => squaredDistance(a) - squaredDistance(b)); // O(nlogn) time for sort

//   return points.slice(0, k); // O(k) time for slice

//   // O(1) space no extra space used
// };

var kClosest = function (points, k) {
  const squaredDistance = ([x, y]) => x ** 2 + y ** 2;

  let maxQueue = new PriorityQueue((a, b) => {
    // return 1 to swap elements
    // here we swap if preceding dist is smaller to achieve maxpriorityqueue
    if (a.dist < b.dist) {
      return 1;
    } else {
      return -1;
    }
  });

  // time: O(n*logn) where n is num of points
  for (let point of points) {
    maxQueue.enqueue({
      coord: point,
      dist: squaredDistance([point[0], point[1]]),
    });
  }

  // time: O(n*logn) where n is num of elems dequeued
  while (maxQueue.size() > k) {
    maxQueue.dequeue();
  }

  return maxQueue.front();
  // O(n) space to store elems in heap
};

console.log(
  kClosest(
    [
      [1, 3],
      [-2, 2],
      [1, 1],
      [0, 0],
      [23, 23],
    ],
    1
  )
);
