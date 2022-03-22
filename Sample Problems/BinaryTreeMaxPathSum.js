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
var maxPathSum = function (root) {
  let maxPathSum = root.val;

  const maxPathSumAtNode = (node) => {
    let left = Number.NEGATIVE_INFINITY;
    let right = Number.NEGATIVE_INFINITY;

    let nodeVal = node.val;

    if (node.left) {
      left = maxPathSumAtNode(node.left);
    }

    if (node.right) {
      right = maxPathSumAtNode(node.right);
    }
    // console.log(nodeVal, left, right)

    maxPathSum = Math.max(
      maxPathSum,
      nodeVal,
      left,
      right,
      nodeVal + left,
      nodeVal + right,
      nodeVal + left + right
    );

    return Math.max(nodeVal, nodeVal + left, nodeVal + right);
  };

  maxPathSumAtNode(root);

  return maxPathSum;
};
