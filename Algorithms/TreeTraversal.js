// Root-Left-Right

const preOrder = (root) => {
  let current = root;
  let visited = [];
  let traverse = (head) => {
    visited.push(head.data);
    if (head.left) {
      traverse(head.left);
    }
    if (head.right) {
      traverse(head.right);
    }
  };
  traverse(current);
  return visited;
};

// Left-Root-Right
const inOrder = (root) => {
  let current = root;
  let visited = [];

  let traverse = (head) => {
    if (head.left) {
      traverse(head.left);
    }
    visited.push(current.data);
    if (head.right) {
      traverse(head.right);
    }
  };

  traverse(current);
  return visited;
};

// Left-Right-Root
const postOrder = (root) => {
  let current = root;
  let visited = [];

  let traverse = (head) => {
    if (head.left) {
      traverse(head.left);
    }
    if (head.right) {
      traverse(head.right);
    }
    visited.push(head.data);
  };

  traverse(current);
  return visited;
};

const BFS = (root) => {
  let current = root;
  let queue = [];
  let visited = [];

  queue.push(current);

  while (queue.length) {
    current = queue.shift();
    visited.push(current.data);
    if (current.left) {
      queue.push(current.left);
    }
    if (current.right) {
      queue.push(current.right);
    }
  }

  return visited;
};

// Height of a Binary Tree
// If there are n nodes in binary tree, maximum height of the binary tree is n-1 and minimum height is floor(log2n).
const height = (root) => {
  if (root === null) {
    return -1;
  }
  leftSubtreeHeight = height(root.left);
  rightSubtreeHeight = height(root.right);
  return Math.max(leftSubtreeHeight, rightSubtreeHeight) + 1;
};

// BFS or Level Order Traversal
// Root is 0, nodes to the left are -1 and nodes to the right are +1
// Use BFS to push unique level nodes into topNodes level by level

//       0     // only top 4 nodes are added to topNodes because bottom -1
//      / \    // would already exist at time of pushing to dictionary
//    -1   1
//    /
//  -2
//   \
//   -1

// BFS
const topView = (root) => {
  let current = root;
  let queue = [];
  let topNodes = new Map();

  current.level = 0;

  queue.push(current);

  while (queue.length) {
    current = queue.shift();
    if (topNodes.get(current.level) === undefined) {
      topNodes.set(current.level, current);
    }
    if (current.left) {
      current.left.level = current.level - 1;
      queue.push(current.left);
    }
    if (current.right) {
      current.right.level = current.level + 1;
      queue.push(current.right);
    }
  }

  return topNodes;
};

// insert node into a Binary Search Tree and return root

const insert = (BST, val) => {
  let current = BST.root;

  if (!current) {
    BST.root = new Node(val);
    return BST.root;
  }

  while (current) {
    if (val <= current.data) {
      if (current.left) {
        current = current.left;
      } else {
        current.left = new Node(val);
        break;
      }
    } else {
      if (current.right) {
        current = current.right;
      } else {
        current.right = new Node(val);
        break;
      }
    }
  }

  return BST.root;
};

const lowestCommonAncestor = (root, p, q) => {
  let current = root;

  let traverse = (node) => {
    // If reached the end of a branch, return False.
    if (!node) {
      return;
    }

    let left = traverse(node.left);

    let right = traverse(node.right);

    // If the current node is one of p or q
    let mid = node === p || node == q;

    // If any two of the three flags left, right or mid become True.
    if (mid + left + right >= 2) {
      root = node;
    }

    // return true if any of the 3 bools are true
    return mid || left || right;
  };
  traverse(root);
  return root;
};

const isValidBST = (root) => {
  let min = Number.NEGATIVE_INFINITY;
  let max = Number.POSITIVE_INFINITY;

  let validate = (node, min, max) => {
    if (node === null) {
      return true;
    }
    if (min >= node.val || max <= node.val) {
      return false;
    }
    return (
      validate(node.left, min, node.val) && validate(node.right, node.val, max)
    );
  };
  return validate(root);
};

var rightSideView = function (root) {
  let output = [];
  let maxLevel = 0;
  let traverse = (node, level) => {
    if (node === null) {
      return null;
    }
    if (level > maxLevel) {
      output.push(node.val);
      maxLevel = level;
    }

    traverse(node.right, level + 1);

    traverse(node.left, level + 1);
  };
  traverse(root, 1);
  return output;
};
