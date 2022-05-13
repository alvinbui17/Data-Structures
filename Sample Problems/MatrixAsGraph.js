const grid = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
];

let num_rows = grid.length;
let num_cols = grid[0].length;

function get_neighbors(coord) {
  const [row, col] = coord;
  const delta_row = [-1, 0, 1, 0];
  const delta_col = [0, 1, 0, -1];
  const res = [];
  for (let i = 0; i < delta_row.length; i++) {
    neighbor_row = row + delta_row[i];
    neighbor_col = col + delta_col[i];
    if (
      0 <= neighbor_row &&
      neighbor_row < num_rows &&
      0 <= neighbor_col &&
      neighbor_col < num_cols
    ) {
      res.push([neighbor_row, neighbor_col]);
    }
  }
  return res;
}

function bfs(starting_node) {
  const queue = [starting_node];
  const visited = new Map();
  visited.set(starting_node.toString(), 1);
  while (queue.length) {
    // console.log("in while", queue);
    const node = queue.shift();
    for (const neighbor of get_neighbors(node)) {
      if (!visited.get(neighbor.toString())) {
        // Do stuff with the node if required
        // ...
        queue.push(neighbor);
        visited.set(neighbor.toString(), 1);
      } else {
        // console.log("already in visited");
      }
    }
  }
  return visited;
}

console.log(get_neighbors([1, 1]));

console.log(bfs([0, 0]));
