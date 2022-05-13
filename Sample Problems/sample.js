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

  let bfs = (root) => {
    let visited = new Map();

    let queue = [root];
    while (queue.length) {
      let curr = queue.shift();
      let [curr_x, curr_y] = curr;

      if (!visited.get(curr.toString())) {
        visited.set(curr.toString(), 1);

        for (let neighbor of getNeighbors(curr)) {
          queue.push(neighbor);
        }

        if (image[curr_x][curr_y] === image[r][c]) {
          image[curr_x][curr_y] = replacement;
        }
      }
    }
  };

  bfs([r, c]);
  image[r][c] = replacement;

  console.log(image);
  return image;
}
