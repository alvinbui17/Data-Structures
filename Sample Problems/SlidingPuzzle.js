// function numSteps(initPos) {
//   let getNeighbors = (board) => {
//     let res = [];
//     next_boards = [];
//     let check = new Set();

//     let posOfZero;
//     if (board[0].indexOf(0) !== -1) {
//       posOfZero = [0, board[0].indexOf(0)];
//     } else {
//       posOfZero = [1, board[1].indexOf(0)];
//     }
//     //   console.log(board);
//     //   console.log(posOfZero);

//     let getAdjToZero = (posOfZero) => {
//       // console.log(posOfZero);
//       let dx = [-1, 0, 1, 0];
//       let dy = [0, 1, 0, -1];

//       for (let j = 0; j < dx.length; j++) {
//         let nbr_x = posOfZero[0] + dx[j];
//         let nbr_y = posOfZero[1] + dy[j];

//         if (0 <= nbr_x && nbr_x < 2 && 0 <= nbr_y && nbr_y < 3) {
//           if (!check.has([nbr_x, nbr_y].toString())) {
//             check.add([nbr_x, nbr_y].toString());
//             res.push([nbr_x, nbr_y]);
//           }
//         }
//       }
//     };

//     getAdjToZero(posOfZero);

//     let [x, y] = posOfZero;

//     for (let adj of res) {
//       let [n_x, n_y] = adj;
//       let temp = JSON.parse(JSON.stringify(board));
//       [temp[x][y], temp[n_x][n_y]] = [temp[n_x][n_y], temp[x][y]];
//       next_boards.push(temp);
//     }

//     return next_boards;
//   };

//   let visited = new Set();
//   visited.add(initPos.flat().toString());

//   let queue = [initPos];

//   let bfs = () => {
//     while (queue.length) {
//       let queueLenAtLevel = queue.length;
//       for (let i = 0; i < queueLenAtLevel; i++) {
//         let curr = queue.shift();
//         for (let next_board of getNeighbors(curr)) {
//           if (next_board.flat().toString() === "1,2,3,4,5,0") return steps;
//           if (!visited.has(next_board.flat().toString())) {
//             visited.add(next_board.flat().toString());
//             queue.push(next_board);
//             // console.log(queue);
//           }
//         }
//       }
//       steps++;
//     }
//     return -1;
//   };

//   let steps = 1;
//   return bfs();
// }

function numSteps(initPos) {
  let getNeighbors = (board) => {
    let res = [];
    next_boards = [];
    let check = new Set();

    let posOfZero;
    if (board[0].indexOf(0) !== -1) {
      posOfZero = [0, board[0].indexOf(0)];
    } else {
      posOfZero = [1, board[1].indexOf(0)];
    }
    //   console.log(board);
    //   console.log(posOfZero);

    let getAdjToZero = (posOfZero) => {
      // console.log(posOfZero);
      let dx = [-1, 0, 1, 0];
      let dy = [0, 1, 0, -1];

      for (let j = 0; j < dx.length; j++) {
        let nbr_x = posOfZero[0] + dx[j];
        let nbr_y = posOfZero[1] + dy[j];

        if (0 <= nbr_x && nbr_x < 2 && 0 <= nbr_y && nbr_y < 3) {
          if (!check.has([nbr_x, nbr_y].toString())) {
            check.add([nbr_x, nbr_y].toString());
            res.push([nbr_x, nbr_y]);
          }
        }
      }
    };

    getAdjToZero(posOfZero);

    let [x, y] = posOfZero;

    for (let adj of res) {
      let [n_x, n_y] = adj;
      let temp = JSON.parse(JSON.stringify(board));
      [temp[x][y], temp[n_x][n_y]] = [temp[n_x][n_y], temp[x][y]];
      next_boards.push(temp);
    }

    return next_boards;
  };

  let visited = new Set();
  visited.add(initPos.reduce((a, b) => a.concat(b), []).toString());

  let queue = [initPos];

  let bfs = () => {
    while (queue.length) {
      let queueLenAtLevel = queue.length;
      for (let i = 0; i < queueLenAtLevel; i++) {
        let curr = queue.shift();
        for (let next_board of getNeighbors(curr)) {
          if (
            next_board.reduce((a, b) => a.concat(b), []).toString() ===
            "1,2,3,4,5,0"
          )
            return steps;
          if (
            !visited.has(
              next_board.reduce((a, b) => a.concat(b), []).toString()
            )
          ) {
            visited.add(
              next_board.reduce((a, b) => a.concat(b), []).toString()
            );
            queue.push(next_board);
            // console.log(queue);
          }
        }
      }
      steps++;
    }
    return -1;
  };

  let steps = 1;
  return bfs();
}

console.log(
  numSteps([
    [4, 1, 3],
    [2, 0, 5],
  ])
);
