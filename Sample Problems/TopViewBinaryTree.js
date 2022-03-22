topView(root);
{
  let map = {};

  root.level = 0;

  let queue = [root];

  while (queue.length) {
    let curr = queue.pop();

    if (!map[curr.level]) map[curr.level] = curr.data;

    if (curr.left) {
      curr.left.level = curr.level - 1;
      queue.push(curr.left);
    }

    if (curr.right) {
      curr.right.level = curr.level + 1;
      queue.push(curr.right);
    }
  }
  let keys = Object.keys(map).sort((a, b) => a - b);

  let res = [];

  keys.forEach((key) => {
    res.push(map[key]);
  });

  return res;
}
