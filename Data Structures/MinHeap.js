class MinHeap {
  constructor(k) {
    this.capacity = k;
    this.heap = [null]; // elements will start at index 1
  }

  _insert(node) {
    // insert new node at end of array
    this.heap.push(node);

    // find correct index for new node
    if (this.heap.length > 1) {
      let currentIndex = this.heap.length - 1;
      // traverse up the parent node until currentIndex node (currentIndex) is greater
      // than the parent (currentIndex/2)
      while (
        currentIndex > 1 &&
        this.heap[Math.floor(currentIndex / 2)] > this.heap[currentIndex]
      ) {
        // Swapping the two nodes by using the ES6 destructuring syntax
        this._swap(currentIndex, Math.floor(currentIndex / 2));
        currentIndex = Math.floor(currentIndex / 2);
      }
    }
    // if (this.heap.length - 1 > this.capacity) {
    //   this._pop();
    // }
  }

  _pop() {
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
          this._swap(current, rightChildIndex);
          current = rightChildIndex;
        } else {
          this._swap(current, leftChildIndex);
          current = leftChildIndex;
        }
        leftChildIndex = current * 2;
        rightChildIndex = current * 2 + 1;
      }
    } else if (this.heap.length === 2) {
      this.heap.pop();
    } else {
      return;
    }
  }

  _swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
}

let minHeap = new MinHeap(4);

let newArr = [3, 2, 3, 1, 2, 4, 5, 5, 6];

newArr.forEach((el) => {
  minHeap._insert(el);
});

while (minHeap.heap.length - 1 > 4) {
  minHeap._pop();
}

// minHeap._pop();
// minHeap._pop();
// minHeap._pop();
// minHeap._pop();
// minHeap._pop();

console.log(minHeap.heap);
