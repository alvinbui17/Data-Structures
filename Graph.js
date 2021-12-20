// A graph is a pictorial representation of a set of objects where some pairs of objects are connected by links.
// The interconnected objects are represented by points termed as vertices (nodes), and the links that connect the vertices
// are called edges.

// Graph Implementation using Adjecency List
class Graph {
  constructor() {
    this.numOfVertices = 0;
    // key of a map holds a vertex and values holds an array of an adjacent node
    this.adjList = new Map();
  }

  _addVertex(v) {
    this.adjList.set(v, []);
    this.numOfVertices++;
  }

  _addEdge(v, w) {
    // addEdge(origin, destination)
    this.adjList.get(v).push(w);

    // uni-directional
    this.adjList.get(w).push(v);
  }

  _printGraph() {
    const keys = this.adjList.keys();
    // OF for objects, IN for arrays
    for (let key of keys) {
      console.log(`${key} -> ${this.adjList.get(key)}`);
    }
  }

  _BFS_Iterative(startingNode) {
    //abdecf
    // start at node, push node to queue, pop value from queue to
    // visited, push that value's neighbors to queue, repeat
    let queue = [];
    let visited = [];
    let current = startingNode;

    queue.push(current);

    while (queue.length) {
      current = queue.shift();

      if (!visited.includes(current)) {
        visited.push(current);

        if (this.adjList.get(current)) {
          this.adjList.get(current).forEach((adjacentNode) => {
            if (!visited.includes(adjacentNode)) {
              queue.push(adjacentNode);
            }
          });
        }
      }
    }
    console.log("ITERATIVE");
    return visited;
  }

  //   _BFS_Recursive(startingNode) {
  //     let visited = [];
  //     let current = startingNode;

  //     let traverse = (node) => {
  //       if (!visited.includes(node)) {
  //         visited.push(node);
  //       }
  //       if (this.adjList.get(node)) {
  //         this.adjList.get(node).forEach((adjacentNode) => {
  //           if (!visited.includes(adjacentNode)) {
  //             traverse(adjacentNode);
  //           }
  //         });
  //       }
  //     };

  //     traverse(current);
  //     console.log("RECURSIVE");
  //     return visited;
  //   }

  _DFS_Iterative(startingNode) {
    //abcedf
    let stack = [];
    let visited = [];
    let current = startingNode;

    stack.push(current);

    while (stack.length) {
      //   console.log(stack);
      current = stack.pop();

      if (!visited.includes(current)) {
        visited.push(current);

        if (this.adjList.get(current)) {
          //.reverse() array if you want...the order in which you push adjacent nodes to stack will alter result
          this.adjList.get(current).forEach((adjacentNode) => {
            if (!visited.includes(adjacentNode)) {
              stack.push(adjacentNode);
            }
          });
        }
      }
    }
    console.log("ITERATIVE");
    return visited;
  }

  _DFS_Recursive(startingNode) {
    let visited = [];
    let current = startingNode;

    let traverse = (node) => {
      if (!visited.includes(node)) {
        visited.push(node);

        if (this.adjList.get(node)) {
          this.adjList.get(node).forEach((adjacentNode) => {
            traverse(adjacentNode);
          });
        }
      }
    };

    traverse(current);
    console.log("RECURSIVE");
    return visited;
  }
}

const myGraph = new Graph();

let vertices = ["A", "B", "C", "D", "E", "F"];

vertices.forEach((vertex) => {
  myGraph._addVertex(vertex);
});

myGraph._addEdge("A", "B");
myGraph._addEdge("A", "D");
myGraph._addEdge("A", "E");
myGraph._addEdge("B", "C");
myGraph._addEdge("D", "E");
myGraph._addEdge("E", "F");
myGraph._addEdge("E", "C");
myGraph._addEdge("C", "F");

// console.log(myGraph._printGraph());
// console.log(myGraph._DFS_Iterative("A"));
// console.log(myGraph._DFS_Recursive("A"));
console.log(myGraph._BFS_Iterative("A"));

// let vertices = [1, 2, 3, 4, 5, 6];

// vertices.forEach((vertex) => {
//   myGraph._addVertex(vertex);
// });

// myGraph._addEdge(1, 2);
// myGraph._addEdge(1, 3);
// myGraph._addEdge(1, 4);
// myGraph._addEdge(3, 4);
// myGraph._addEdge(4, 5);
// myGraph._addEdge(4, 6);
// myGraph._addEdge(5, 6);

// myGraph._printGraph();

// console.log(myGraph._DFS_Iterative(1));
