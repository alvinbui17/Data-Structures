/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumRootToLeaf = function (root) {
  let binaries = [];
  let sum = 0;

  let traverse = (node, str) => {
    if (!node) {
      return;
    }

    let localBinary = str + node.val;

    if (node.left === null && node.right === null) {
      binaries.push(localBinary);
    }

    traverse(node.left, localBinary);

    traverse(node.right, localBinary);
  };

  traverse(root, "");

  binaries.forEach((binary) => {
    sum += parseInt(binary, 2);
  });

  return sum;
};
