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
 * @return {number[][]}
 */

//  Input: root = [3,9,20,null,null,15,7]
//  Output: [[3],[9,20],[15,7]]

var levelOrder = function (root) {
  let result = [];
  currentLevelNodes = [];
  if (root) currentLevelNodes.push(root);
  while (currentLevelNodes.length > 0) {
    current = [];
    let len = currentLevelNodes.length;
    for (let i = 0; i < len; i++) {
      let node = currentLevelNodes.shift();
      current.push(node.val);
      if (node.left) {
        currentLevelNodes.push(node.left);
      }
      if (node.right) {
        currentLevelNodes.push(node.right);
      }
    }
    result.push(current);
  }
  return result;
};

let root = [3, 9, 20, null, null, 15, 7];

console.log(levelOrder(root));
