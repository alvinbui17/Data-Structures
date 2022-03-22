function binaryTreeRightSideView(root) {
  // push right-most node at each level to res
  let res = [];

  let queue = [root];
  while (queue.length) {
    let queueLenAtLevel = queue.length;
    let nodesAtLevel = [];

    for (let i = 0; i < queueLenAtLevel; i++) {
      let curr = queue.shift();
      nodesAtLevel.push(curr.val);

      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }
    res.push(nodesAtLevel[nodesAtLevel.length - 1]);
  }
  return res;
}
