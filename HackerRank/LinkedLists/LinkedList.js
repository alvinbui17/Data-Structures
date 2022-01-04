const printLinkedList = (head) => {
  let current = head;
  while (current) {
    console.log(current.data);
    current = current.next;
  }
};

const insertNodeAtHead = (head, data) => {
  let newHead = new SinglyLinkedListNode();
  newHead.data = data;
  newHead.next = head;
  return newHead;
};

const insertNodeAtPosition = (llist, data, position) => {
  const newNode = new SinglyLinkedListNode();
  newNode.data = data;

  if (llist === null) {
    llist = newNode;
    return newNode;
  }

  if (position === 0) {
    newNode.next = llist;
    return newNode;
  } else {
    let current = llist;
    while (i < position - 1) {
      current = current.next;
      i++;
    }
    let nodeBeforeInsertedNode = current;
    let nodeAfterNodeToBeRemoved = current.next;

    nodeBeforeInsertedNode.next = newNode;
    newNode.next = nodeAfterNodeToBeRemoved;

    return newNode;
  }
};

const deleteNode = (llist, position) => {
  let current = llist;

  if (position === 0) {
    llist = current.next;
  }
  // llist is the head
  let i = 0;
  while (i < position - 1) {
    current = current.next;
    i++;
  }
  let nodeBeforeDelete = current;
  let nodeAfterDelete = current.next.next;

  nodeBeforeDelete.next = nodeAfterDelete;

  return llist;
};

const reversePrint = (llist) => {
  let traverseAndPrint = (head) => {
    let current = head;
    if (current.next) {
      traverseAndPrint(current.next);
    }
    console.log(current.data);
  };
  traverseAndPrint(llist);
};

const reverseLinkedList = (llist) => {
  let previous = null;
  let next = null;
  let current = llist;
  while (current) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }
  return previous;
};

const CompareLists = (llist1, llist2) => {
  let current1 = llist1;
  let current2 = llist2;
  if (current1 === null && current2 === null) {
    return 1;
  }
  if (current1 === null && current2 !== null) {
    return 0;
  }
  if (current1 !== null && current2 === null) {
    return 0;
  }
  if (current1.data !== current2.data) {
    return 0;
  }

  return CompareLists(current1.next, current2.next);
};

// merge 2 sorted lists
const mergeLists = (head1, head2) => {
  let current1 = head1;
  let current2 = head2;
  let newHead = new SinglyLinkedListNode();

  if (current1 === null) {
    return current2;
  }

  if (current2 === null) {
    return current1;
  }

  if (current1.data < current2.data) {
    newHead = current1;
    current1 = current1.next;
  } else {
    newHead = current2;
    current2 = current2.next;
  }

  let currentNode = newHead;
  while (current1 !== null && current2 !== null) {
    if (current1.data < current2.data) {
      currentNode.next = current1;
      current1 = current1.next;
      currentNode = currentNode.next;
    } else {
      currentNode.next = current2;
      current2 = current2.next;
      currentNode = currentNode.next;
    }
  }
  if (current1 === null) {
    currentNode.next = current2;
  }

  if (current2 === null) {
    currentNode.next = current1;
  }
  return newHead;
};

// get node n positions from tail
const getNode = (llist, positionFromTail) => {
  let current = llist;
  let runner = llist;

  for (let i = 0; i < positionFromTail; i++) {
    runner = runner.next;
  }

  while (runner.next !== null) {
    runner = runner.next;
    current = current.next;
  }

  return current.data;
};

const removeDuplicates = (llist) => {
  let current = llist;

  if (current === null || current.next === null) {
    return current;
  }

  while (current.next) {
    if (current.data === current.next.data) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return llist;
};

// find node where two lists merge
const findMergeNode = (headA, headB) => {
  let current1 = headA;
  let current2 = headB;

  let seen = new Map();

  while (current1) {
    seen.set(current1, 1);
    current1 = current1.next;
  }

  while (current2) {
    if (seen.get(current2)) {
      return current2.data;
    } else {
      current2 = current2.next;
    }
  }
};

// insert node into doubly linked list
const sortedInsert = (llist, data) => {
  console.log(llist);
  let newNode = new DoublyLinkedListNode();
  newNode.data = data;

  let current = llist;
  let prev = null;

  while (true) {
    if (current === null) {
      prev.next = newNode;
      newNode.prev = prev;
      newNode.next = current;
      return llist;
    }
    if (newNode.data >= current.data) {
      prev = current;
      current = current.next;
    } else {
      if (current.prev) {
        prev = current.prev;
        newNode.prev = prev;
        prev.next = newNode;
        newNode.next = current;
        current.prev = newNode;
        return llist;
      } else {
        current.prev = newNode;
        newNode.next = current;
        return newNode;
      }
    }
  }
  return llist;
};
