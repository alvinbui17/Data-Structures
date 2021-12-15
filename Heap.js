// The child nodes of any element at index i are placed at indexes 2*i + 1 and 2*i + 2.
// Also, we can go reverse and find out the parent node of any element at i using the formula i/2.
// Please note: this is applicable only for Binary Heaps.

class MinHeap {
  constructor() {
    //intialize array heap and add a dummy element at index 0
    // we want indices to start at 1
    // this makes sense when you consider line 2 above
    this.heap = [null];
  }

  // Time Complexity of accessing the min/max element in the heap is O(1).
  _getMin() {
    // accessing min element at index 1 in heap array
    return this.heap[1];
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
    // console.log(this.heap);
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

      // case where left and right children exist and current is greater than
      // at least one of them
      while (this.heap[leftChildIndex] && this.heap[rightChildIndex]) {
        console.log("in the while loop now");
        if (
          this.heap[current] > this.heap[leftChildIndex] ||
          this.heap[current] > this.heap[leftChildIndex]
        ) {
          console.log("first if cond satisfied");
          if (this.heap[leftChildIndex] > this.heap[rightChildIndex]) {
            [this.heap[current], this.heap[rightChildIndex]] = [
              this.heap[rightChildIndex],
              this.heap[current],
            ];
            current = rightChildIndex;
            console.log("if of if/else cond satisfied");
            console.log(this.heap);
          } else {
            [this.heap[current], this.heap[leftChildIndex]] = [
              this.heap[leftChildIndex],
              this.heap[current],
            ];
            current = leftChildIndex;
            console.log("else of if/else cond satisfied");
            console.log(this.heap);
          }
        }
        leftChildIndex = current * 2;
        rightChildIndex = current * 2 + 1;
      }

      if (
        this.heap[rightChildIndex] === undefined &&
        this.heap[leftChildIndex] < this.heap[current]
      ) {
        [this.heap[current], this.heap[leftChildIndex]] = [
          this.heap[leftChildIndex],
          this.heap[current],
        ];
        console.log("no right child and left child less than current");
        console.log(this.heap);
      } else if (this.heap.length === 2) {
        // If there are only two elements in the array,
        // we directly splice out the first element
        this.heap.splice(1, 1);
      } else {
        return;
      }
    }
  }
}

const minHeap = new MinHeap();

// minHeap._insertNode(24);
// minHeap._insertNode(54);
// minHeap._insertNode(48);
// minHeap._insertNode(36);
// minHeap._insertNode(37);
// minHeap._insertNode(39);
// minHeap._insertNode(41);

minHeap._insertNode(1);
minHeap._insertNode(2);
minHeap._insertNode(3);
minHeap._insertNode(4);
minHeap._insertNode(5);
minHeap._insertNode(6);
minHeap._insertNode(7);
minHeap._insertNode(8);
minHeap._insertNode(9);
minHeap._insertNode(10);
minHeap._insertNode(11);
minHeap._insertNode(12);
minHeap._insertNode(13);
minHeap._insertNode(14);

// breaks with 14 nodes
minHeap._remove();
