let dfs = (node) => {
  if (!node) return;

  let left = dfs(node.left);
  let right = dfs(node.right);

  return;
};
