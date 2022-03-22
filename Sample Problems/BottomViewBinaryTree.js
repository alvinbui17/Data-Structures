let bottomView = (root) => {
  let current = root;

  let levelMap = {};
  let res = [];

  current.level = 0;

  let traverse = (node) => {
    if (node.left) {
      node.left.level = node.level - 1;
      traverse(node.left);
    }

    if (!levelMap[node.level]) {
      res.push(node.data);
      levelMap[node.level] = 1;
    }

    if (node.right) {
      node.right.level = node.level + 1;
      traverse(node.right);
    }
  };

  traverse(current, current.level);
  return res;
};
