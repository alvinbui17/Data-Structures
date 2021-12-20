// BST is ordered, Heap is NOT
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
    this.multiplicity = 0;
  }

  _getLeftChild() {
    return this.left;
  }

  _getRightChild() {
    return this.right;
  }

  _setLeftChild(node) {
    this.left = node;
    if (node) {
      node.parent = this;
    }
  }

  _setRightChild(node) {
    this.right = node;
    if (node) {
      node.parent = this;
    }
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
    this.size = 0;
  }

  findNodeAndParent(value) {
    // helper function for finding parent and whether or not value already exists

    // start at the root node
    let node = this.root;
    let parent;

    while (node && node.value !== value) {
      // once we reach a node.left or node.right that has no value,
      // node = undefined and loop will break
      parent = node;
      if (value > node.value) {
        node = node.right;
      } else {
        node = node.left;
      }
    }
    return { found: node, parent };
  }

  _add(value) {
    // add a new node to the BST
    // this implementation will allow duplicate values, storing multiplicity

    const newNode = new TreeNode(value);

    // if there is an existing root
    if (this.root) {
      const { found, parent } = this.findNodeAndParent(value);
      if (parent) {
        newNode.parent = parent;
      }
      // if value already exists in tree
      if (found) {
        // if a value already exists, increment multiplicity
        if (found.multiplicity !== undefined) {
          found.multiplicity++;
        }
      }
      //   if value doesn't already exist, check whether to place L/R of parent
      else if (value < parent.value) {
        newNode.multiplicity = 1;
        parent.left = newNode;
      } else {
        newNode.multiplicity = 1;
        parent.right = newNode;
      }
    } else {
      // if no root then set newNode as root
      newNode.multiplicity = 1;
      this.root = newNode;
    }

    this.size++;
    return newNode;
  }

  _delete(value) {
    const { found, parent } = this.findNodeAndParent(value);
    if (!found) {
      console.log(`Cannot delete ${value}, value does not exist in tree.`);
      return;
    } else {
      // check for multiplicity
      // if > 1 then decrement and return
      if (found.multiplicity > 1) {
        found.multiplicity--;
        return;
      }
      // delete a leaf node (0 children)
      if (!found.left && !found.right) {
        if (parent.left === found) {
          parent.left = null;
        } else {
          parent.right = null;
        }
        this.size--;
      }
      // delete a node with 1 child
      else if ((found.left && !found.right) || (!found.left && found.right)) {
        if (found.left) {
          if (parent.left === found) {
            parent.left = found.left;
          } else {
            parent.right = found.left;
          }
        } else {
          if (parent.left === found) {
            parent.left = found.right;
          } else {
            parent.right = found.right;
          }
        }
        this.size--;
      }

      // delete the root node
      else if (value === this.root.value) {
        // right sub tree becomes root and smallest value
        // of right sub tree will point to left sub tree of original root
        const leftSubTree = this.root.left;
        const rightSubTree = this.root.right;

        let current = rightSubTree;
        let smallestValueOfRightSubTree;

        while (current) {
          smallestValueOfRightSubTree = current;
          current = current.left;
        }

        smallestValueOfRightSubTree.left = leftSubTree;

        this.size--;
        this.root = rightSubTree;
      }

      // delete a node with 2 children
      else if (found.left && found.right) {
        // find largest node in left subtree
        // copy largest value of left subtree into node to delete
        // delete node whose value was just copied
        const leftSubTree = found.left;
        let current = leftSubTree;
        let largestValueOfLeftSubTree;

        while (current) {
          largestValueOfLeftSubTree = current;
          current = current.right;
        }

        if (found.right) {
          largestValueOfLeftSubTree.right = found.right;
        }

        if (parent.left === found) {
          parent.left = largestValueOfLeftSubTree;
          this.size--;
        } else {
          parent.right = largestValueOfLeftSubTree;
          this.size--;
        }
      }
    }
  }

  _getMax() {
    let current = this.root;
    let max;

    while (current) {
      max = current;
      current = current.right;
    }

    return max;
  }

  _getMin() {
    let current = this.root;
    let min;

    while (current) {
      min = current;
      current = current.left;
    }

    return min;
  }

  _BFS() {
    let queue = [];
    let visited = [];
    let current = this.root;

    // adding root to "beginning of queue"
    queue.push(current);
    // while queue is not empty
    while (queue.length) {
      // assign first element in queue to current
      // and then delete element from queue
      current = queue.shift();
      visited.push(current.value);

      // if current node has children then add them to queue
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
    return visited;
  }

  _DFS_PreOrder_Iterative() {
    let stack = [];
    let visited = [];
    let current = this.root;

    stack.push(current);

    while (stack.length) {
      current = stack.pop();
      visited.push(current.value);

      if (current.right) {
        stack.push(current.right);
      }
      if (current.left) {
        stack.push(current.left);
      }
    }
    console.log("ITERATIVE");
    return visited;
  }

  _DFS_PreOrder_Recursive() {
    let visited = [];
    let current = this.root;

    let traverse = (node) => {
      visited.push(node.value);
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    };

    traverse(current);
    console.log("RECURSIVE");
    return visited;
  }

  _DFS_InOrder_Recursive() {
    let visited = [];
    let current = this.root;

    let traverse = (node) => {
      if (node.left) {
        // console.log("yes left, traversing now", node.left.value);
        traverse(node.left);
      }

      visited.push(node.value);
      //   console.log("broke, pushing", node.value);

      if (node.right) {
        // console.log("yes right, traversing now", node.right.value);
        traverse(node.right);
      }
    };

    traverse(current);
    console.log("RECURSIVE");
    return visited;
  }

  _DFS_InOrder_Iterative() {
    // iterative
    let stack = [];
    let visited = [];
    let current = this.root;

    while (current) {
      stack.push(current);
      current = current.left;

      while (!current && stack.length) {
        current = stack.pop();
        visited.push(current.value);
        current = current.right;
      }
    }

    console.log("ITERATIVE");
    return visited;
  }

  _DFS_PostOrder_Recursive() {
    let visited = [];
    let current = this.root;

    let traverse = (node) => {
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
      visited.push(node.value);
    };

    console.log("RECURSIVE");
    traverse(current);
    return visited;
  }

  _DFS_PostOrder_Iterative() {
    // 2 STACK APPROACH
    // ADD ROOT TO STACK1 --> POP ITEM FROM STACK1 INTO STACK2
    // --> ADD POPPED ITEMS CHILDREN INTO STACK1
    // --> WHEN STACK1 EMPTY, POP ALL ITEMS FROM STACK2 INTO VISITED
    let stack1 = [];
    let stack2 = [];
    let visited = [];
    let current = this.root;

    if (current == null) return;

    // Push root to first stack
    stack1.push(current);

    // Run while first stack is not empty
    while (stack1.length) {
      // Pop an item from stack1 and Push it to stack2
      let temp = stack1.pop();
      stack2.push(temp);

      // Push left and right children of
      // removed item to stack1
      if (temp.left) stack1.push(temp.left);
      if (temp.right) stack1.push(temp.right);
    }

    // push all elements of stack1 into visited array
    while (stack2.length) {
      let temp = stack2.pop();
      visited.push(temp.value);
    }
    return visited;
  }
}

const myBST = new BinarySearchTree();

// myBST._add(3);
// myBST._add(2);
// myBST._add(1);
// myBST._add(4);
// myBST._add(5);
// myBST._add(7);
// myBST._add(6);
// myBST._add(9);

// myBST._delete(4);

myBST._add(5);
myBST._add(3);
myBST._add(7);
myBST._add(6);
myBST._add(4);
myBST._add(1);
myBST._add(2);
myBST._add(0);

console.log(myBST._DFS_PostOrder_Iterative());
console.log(myBST._DFS_PostOrder_Recursive());

// The tree is a data structure where a node has 0 or more descendants/children.

// Tree nodes don’t have cycles (acyclic). If it has cycles, it is a Graph data structure instead.

// Trees with two children or less are called: Binary Tree

// When a Binary Tree is sorted so that the left value is less than the parent and the right children is higher, then and only then we have a Binary Search Tree.

// You can visit a tree in a pre/post/in-order fashion.

// An unbalanced has a time complexity of O(n).

// A balanced has a time complexity of O(log n).
