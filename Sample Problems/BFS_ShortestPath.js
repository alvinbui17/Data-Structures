let graph = {
  0: [1, 2],
  1: [0, 2, 3],
  2: [0, 1],
  3: [1],
};

//        (0)
//        / \
//     (1) - (2)
//     /
//   (3)

const shortestPath = (graph, root, target) => {
  let level = 0;

  let bfs = (root, target) => {
    let queue = [root];
    let visited = {};
    visited[root] = true;

    while (queue.length) {
      let queueLenAtLevel = queue.length;
      for (let i = 0; i < queueLenAtLevel; i++) {
        let curr = queue.shift();
        if (curr === target) return level;

        for (let neighbor of graph[curr]) {
          if (!visited[neighbor]) {
            queue.push(neighbor);
            visited[neighbor] = true;
          }
        }
      }
      level++;
    }
  };

  return `shortest path length between ${root} and ${target} is ${bfs(
    root,
    target
  )}`;
};

console.log(shortestPath(graph, 0, 3));
