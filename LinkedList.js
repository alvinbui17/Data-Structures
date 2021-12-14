class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // insert first node //

  // new node is new this.head and current this.head
  // gets pushed to next
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  // insert last node //

  insertLast(data) {
    let node = new Node(data);
    let current;

    // if LL is empty
    if (!this.head) {
      this.head = node;
    }
    // if LL not empty
    else {
      current = this.head;

      while (current.next) {
        // traverse through LL
        current = current.next;
      }

      current.next = node;
      this.size++;
    }
  }

  // insert at index //

  insertAtIndex(data, index) {
    let insertedNode = new Node(data);

    // if LL is empty
    if (!this.head) {
      console.log("LL empty");
      this.head = insertedNode;
      this.size++;
    }

    // if index exceeds range of LL
    else if (index < 0 || (index > 0 && index > this.size - 1)) {
      console.log("index out of range");
    }

    // otherwise, insert at index
    else {
      console.log("inserting at index", index);
      let current = this.head;
      let nodeBeforeInsertedNode;

      // if index is 0 then insertedNode is new head and existing LL is .next
      if (index === 0) {
        this.insertFirst(data);
      } else {
        // else find the node before specified index: nodeBeforeInsertedNode --> insertedNode --> nodeBeforeInsertedNode.next
        let i = 0;
        while (i < index - 1) {
          current = current.next;
          i++;
        }

        nodeBeforeInsertedNode = current;

        insertedNode.next = current.next;

        nodeBeforeInsertedNode.next = insertedNode;
      }

      this.size++;
    }
  }

  // get at index //

  getAtIndex(index) {
    if (index < 0 || (index > 0 && index > this.size - 1)) {
      console.log("index out of range!");
      return;
    }
    let current = this.head;
    let i = 0;
    while (i < index) {
      current = current.next;
      i++;
    }
    console.log(current);
  }

  // remove at index //

  removeAtIndex(index) {
    let current = this.head;

    if (index < 0 || (index > 0 && index > this.size - 1)) {
      console.log("index out of range!");
      return;
    }

    if (index === 0) {
      this.head = current.next;
      this.size--;
    }

    let nodeBeforeNodeToBeRemoved;
    let nodeToBeRemoved;
    let nodeAfterNodeToBeRemoved;

    let i = 0;
    while (i < index - 1) {
      current = current.next;
      i++;
    }

    nodeBeforeNodeToBeRemoved = current;

    nodeToBeRemoved = current.next;

    nodeAfterNodeToBeRemoved = nodeToBeRemoved.next;

    nodeBeforeNodeToBeRemoved.next = nodeAfterNodeToBeRemoved;

    this.size--;
  }

  // clear list //

  clearList() {
    this.head = null;
    this.size = 0;
  }

  // print list //

  printListData() {
    let current = this.head;

    while (current) {
      if (current.next !== null) {
        console.log(current.data, "-->");
      } else {
        console.log(current.data, "tail");
      }
      current = current.next;
    }
  }
}

// TEST OUT NEW LL METHODS //

// const ll = new LinkedList();
// ll.insertFirst(400);

// ll.insertFirst(300);

// ll.insertFirst(200);

// ll.insertLast(500);

// ll.insertFirst(100);

// //ll.insertAtIndex(150, -12);

// ll.removeAtIndex(3);

// //ll.printListData();

// //ll.clearList();

// ll.printListData();
