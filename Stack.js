// Last In, First Out

class Stack {
  constructor() {
    this.items = [];
    // not using the length property or array.push
    this.count = 0;
  }

  _push(element) {
    // add element to top of stack
    this.items[this.count] = element;
    console.log(`${element} added to top of stack`);
    this.count++;
    return this.count - 1;
  }

  _pop() {
    // remove element from top of stack (element that was last added)
    if (this.count === 0) {
      console.log("Stack empty, nothing to pop!");
      return undefined;
    }
    console.log(`Popping ${this.items[this.count - 1]} from top of stack)`);
    this.items.splice([this.count], 1);
    this.count--;
  }

  _peek() {
    // check top element in stack
    console.log(`Top element is ${this.items[this.count - 1]}`);
  }

  _size() {
    // check size of stack
    console.log(`${this.count} items in stack`);
  }

  _print() {
    // print elements in stack
    if (this.count === 0) {
      console.log("No items in stack to print");
    } else {
      let str = "";
      this.items.forEach((item) => {
        str += item + " ";
      });
      console.log(`BOTTOM <-- ${str} <-- TOP`);
    }
  }

  _clear() {
    // clear stack
    this.items = [];
    this.count = 0;
    console.log("Stack Cleared!");
  }
}

// const myStack = new Stack();
// myStack._push(100);
// myStack._push(200);
// myStack._push(300);
// console.log(myStack);
// myStack._pop();
// myStack._push(400);
// console.log(myStack);
// myStack._peek();
// myStack._push(300);
// myStack._size();
// myStack._clear();
// myStack._print();
