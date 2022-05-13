let dfs = (letters, path, used) => {
  // exit case when goal reached
  if (path.length === letters.length) {
    // add solution to res and return
    res.push(JSON.parse(JSON.stringify(path)));
    return;
  }

  // for each choice
  for (let i = 0; i < letters.length; i++) {
    // skip choice if used already
    if (used[i] === false) {
      // if choice not used

      // make choices
      path.push(letters[i]);
      used[i] = true;

      // dfs
      dfs(letters, path, used);

      // undo choices
      path.pop();
      used[i] = false;
    }
  }
};
