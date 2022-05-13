function bfs(root) {
  let queue = [root];
  let visited = new Set();
  while (queue.length > 0) {
    const node = queue.shift();
    for (const neighbor of get_neighbors(node)) {
      if (!visited.has(neighbor)) {
        queue.push(neighbor);
        visited.add(neighbor);
      }
    }
  }
}

function floodFill(r, c, replacement, image) {
  let getNeighbors = (coord) => {
    let res = [];
    let [coord_x, coord_y] = coord;

    let delta_x = [0, 1, 0, -1];
    let delta_y = [1, 0, -1, 0];

    for (let i = 0; i < delta_x.length; i++) {
      let neighbor_x = coord_x + delta_x[i];
      let neighbor_y = coord_y + delta_y[i];

      if (
        0 <= neighbor_x &&
        neighbor_x < delta_x.length &&
        0 <= neighbor_y &&
        neighbor_y < delta_y.length
      ) {
        res.push([neighbor_x, neighbor_y]);
      }
    }
    return res;
  };

  // bfs to find root's neighbors, check if those have already been visited,
  // change color if same value as root, and then push to queue so that we can
  // check neighbors' neighbors

  let bfs = (root) => {
    let visited = new Map();
    visited.set(root.toString(), 1);

    let queue = [root];
    while (queue.length) {
      let curr = queue.shift();
      for (let neighbor of getNeighbors(curr)) {
        let [n_x, n_y] = neighbor;

        if (
          !visited.get(neighbor.toString()) &&
          image[r][c] === image[n_x][n_y]
        ) {
          visited.set(neighbor.toString(), 1);
          queue.push(neighbor);

          image[n_x][n_y] = replacement;
        }
      }
    }
  };

  bfs([r, c]);
  image[r][c] = replacement;

  return image;
}
