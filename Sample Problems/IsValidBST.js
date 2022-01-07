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
 * @return {boolean}
 */
var isValidBST = function (root) {
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
