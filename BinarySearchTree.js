// BST is ordered, Heap is NOT

const LEFT = 0;
const RIGHT = 1;

class TreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
    this.parent = null;
  }

  _getLeftChild() {
    return this.children[LEFT];
  }

  _getRightChild() {
    return this.children[RIGHT];
  }

  _setLeftChild(node) {
    this.child[LEFT] = node;
    if (node) {
      node.parent = this;
    }
  }

  _setRightChild(node) {
    this.child[RIGHT] = node;
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

    while (node) {
      // once we reach a node.left or node.right that has no value,
      // node = undefined and loop will break
      if ((node.value = value)) {
        break;
      }
      parent = node;
      if (value >= node.value) {
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
      if (found) {
        // if a value already exists, increment multiplicity
        if (found.metaData.multiplicity) {
          found.metaData.multiplicity++;
        } else {
          // first duplicate
          found.metaData.multiplicity = 2;
        }
      }

      if (value < parent.value) {
        parent.left = newNode;
      } else {
        parent.right = newNode;
      }
    } else {
      // if no root then set newNode as root
      this.root = newNode;
    }

    this.size++;
    return newNode;
  }

  _find(value) {
    /* ... */
  }

  _remove(value) {
    /* ... */
  }

  _getMax() {
    /* ... */
  }
}
