// The child nodes of any element at index i are placed at indexes 2*i + 1 and 2*i + 2.
// Also, we can go reverse and find out the parent node of any element at i using the formula i/2.
// Please note: this is applicable only for Binary Heaps.

class MinHeap {
  constructor() {
    // initialize array heap and add a dummy element at index 0
    // we want indices to start at 1
    // this makes sense when you consider line 2 above
    this.heap = [null];
  }

  // Time Complexity of accessing the min/max element in the heap is O(1).
  _getMin() {
    // accessing min element at index 1 in heap array
    return this.heap[1];
  }

  _getMax() {
    return this.heap[this.heap.length - 1];
  }

  _insertNode(node) {
    // The time complexity of inserting a new element in a binary heap is O(log n)
    // where n is the number of elements. The number of elements to compare gets reduced
    // to half on every iteration and hence log n.

    // insert new node to end of heap array
    this.heap.push(node);

    // find correct position for new node
    if (this.heap.length > 1) {
      let current = this.heap.length - 1;

      // traverse up the parent node until current node (current) is greater
      // than the parent (current/2)

      while (
        current > 1 &&
        this.heap[Math.floor(current / 2)] > this.heap[current]
      ) {
        // Swapping the two nodes by using the ES6 destructuring syntax
        [this.heap[Math.floor(current / 2)], this.heap[current]] = [
          this.heap[current],
          this.heap[Math.floor(current / 2)],
        ];
        current = Math.floor(current / 2);
      }
    }
  }

  _remove() {
    console.log("START", this.heap);
    // remove the minimum node from heap

    // if there are more than 2 elements in the heap then
    // put the right-most element at the first index and compare
    // with child nodes

    if (this.heap.length > 2) {
      // really checking if heap contains more than one element since 0 index is null
      console.log("greater than 2");
      // reassign first element to last element and then delete right-most element
      this.heap[1] = this.heap[this.heap.length - 1];
      this.heap.splice(this.heap.length - 1);

      // [1,2,3] --> [3,2,3] --> [3,2]

      // if there are 2 elements left in heap, then swap if element1 is greater than element2
      if (this.heap.length === 3) {
        console.log("equal to 3");
        // if first element is greater then swap --> [2,3]
        if (this.heap[1] > this.heap[2]) {
          [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
        }
        return;
      }

      // e.g. [current, leftChild, rightChild]
      let current = 1;
      let leftChildIndex = current * 2;
      let rightChildIndex = current * 2 + 1;

      // case where left and right children indices exist (always?) and current is greater than
      // at least one of them (leftChild)
      while (
        this.heap[leftChildIndex] &&
        this.heap[rightChildIndex] &&
        (this.heap[current] > this.heap[leftChildIndex] ||
          this.heap[current] > this.heap[rightChildIndex])
      ) {
        console.log("children exist and current is greater than at least one");
        if (this.heap[leftChildIndex] > this.heap[rightChildIndex]) {
          [this.heap[current], this.heap[rightChildIndex]] = [
            this.heap[rightChildIndex],
            this.heap[current],
          ];
          current = rightChildIndex;
        } else {
          [this.heap[current], this.heap[leftChildIndex]] = [
            this.heap[leftChildIndex],
            this.heap[current],
          ];
          current = leftChildIndex;
        }
        leftChildIndex = current * 2;
        rightChildIndex = current * 2 + 1;
      }
    } else if (this.heap.length === 2) {
      // If there are only two elements in the array,
      // we directly splice out the first element
      this.heap.splice(1, 1);
    } else {
      return;
    }
  }
}
let arr = [3, 2, 3, 1, 2, 4, 5, 5, 6];

const minHeap = new MinHeap(4);

for (let num of arr) {
  minHeap._insertNode(num);
}
// const minHeap = new MinHeap();

// minHeap._insertNode(42);
// minHeap._insertNode(1);
// minHeap._insertNode(2);
// minHeap._insertNode(3);
// minHeap._insertNode(4);
// minHeap._insertNode(5);
// minHeap._insertNode(6);
// minHeap._insertNode(7);
// minHeap._insertNode(8);
// minHeap._insertNode(9);

// minHeap._remove();
// minHeap._remove();

// minHeap._insertNode(10);
// minHeap._insertNode(11);
// minHeap._insertNode(12);
// minHeap._insertNode(13);
// minHeap._insertNode(14);
// minHeap._insertNode(14);
// minHeap._insertNode(14);

while (minHeap.heap.length - 1 > 4) {
  minHeap._remove();
}
console.log(minHeap.heap);

// console.log(minHeap._getMin());
// console.log(minHeap._getMax());
