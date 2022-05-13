function levelOrderTraversal(root) {
  let res = [];
  let queue = [root];

  // at least 1 element in queue to kick off bfs
  while (queue.length) {
    // get length of queue at current level
    let lenOfQueueAtLevel = queue.length;
    let nodesAtLevel = [];
    // THIS IS THE KEY -> MUST ONLY POP NODES AT CERTAIN LEVEL
    for (let i = 0; i < lenOfQueueAtLevel; i++) {
      // dequeue next element and add to res or array for current level
      let curr = queue.shift();
      nodesAtLevel.push(curr.val);

      // enqueue children
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }
    res.push(nodesAtLevel);
  }

  return res;
}
