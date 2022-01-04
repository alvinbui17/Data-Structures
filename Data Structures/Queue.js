// First In, First Out

class Queue {
  constructor() {
    this.items = [];
    // not using the length property or array.push
    this.count = 0;
  }

  _enqueue(element) {
    // add element to beginning of queue
    this.items[this.count] = element;
    console.log(`${element} added to queue`);
    this.count++;
    return this.count - 1;
  }

  _dequeue() {
    // remove element from end of queue
    if (this.count === 0) {
      console.log("Queue empty, nothing to dequeue!");
      return undefined;
    }
    console.log(`Dequeueing ${this.items[0]} from beginning of queue)`);
    this.items.splice(0, 1);
    this.count--;
  }

  _peek() {
    // check first element in queue
    console.log(`First element in queue is ${this.items[0]}`);
  }

  _size() {
    // check size of queue
    console.log(`${this.count} items in queue`);
  }

  _print() {
    // print elements in stack
    if (this.count === 0) {
      console.log("No items in queue to print");
    } else {
      let str = "";
      this.items.forEach((item) => {
        str += item + " ";
      });
      console.log(`FRONT <-- ${str} <-- END`);
    }
  }

  _clear() {
    // clear queue
    this.items = [];
    this.count = 0;
    console.log("Queue Cleared!");
  }
}

// const myQueue = new Queue();
// myQueue._enqueue(100);
// myQueue._enqueue(200);
// myQueue._enqueue(300);
// console.log(myQueue);
// myQueue._dequeue();
// myQueue._enqueue(400);
// console.log(myQueue);
// myQueue._peek();
// myQueue._enqueue(300);
// myQueue._size();

// myQueue._print();
// myQueue._clear();

const isBalanced = (s) => {
  let arr = s.split("");

  while (arr.length > 1) {
    if (
      (arr[0] === "{" && arr[arr.length - 1 === "}"]) ||
      (arr[0] === "[" && arr[arr.length - 1 === "]"]) ||
      (arr[0] === "(" && arr[arr.length - 1] === ")")
    ) {
      arr.pop();
      arr.shift();
    }
  }
  console.log(arr);
};

let s = "{[()]}";
isBalanced(s);
