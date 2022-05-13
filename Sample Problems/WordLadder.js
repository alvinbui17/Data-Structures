let wordList = ["cold", "gold", "cord", "card", "ward", "warm", "tard", "sold"];

function wordLadder(begin, end, wordList) {
  let getNeighbors = (root) => {
    let res = [];
    let alpha = "abcdefghijklmnopqrstuvwxyz";
    let word = root.split("");

    for (let i = 0; i < word.length; i++) {
      for (let j = 0; j < alpha.length; j++) {
        let temp = word[i];
        word[i] = alpha[j];
        //   console.log(word);
        if (wordList.includes(word.join(""))) {
          res.push(word.join(""));
        }
        word[i] = temp;
      }
    }
    return res;
  };

  let visited = new Map();
  visited.set(begin, 1);

  let queue = [begin];
  let steps = 0;

  let bfs = () => {
    while (queue.length) {
      let queueLenAtLevel = queue.length;
      for (let i = 0; i < queueLenAtLevel; i++) {
        let curr = queue.shift();
        if (curr === end) return steps;
        for (let neighbor of getNeighbors(curr)) {
          if (!visited.get(neighbor)) {
            visited.set(neighbor, 1);
            queue.push(neighbor);
          }
        }
      }
      steps++;
    }
  };

  bfs();
  return steps;
}

console.log(wordLadder("cold", "warm", wordList));

// let getNeighbors = (root) => {
//   let res = new Set();
//   let alpha = "abcdefghijklmnopqrstuvwxyz";
//   let word = root.split("");

//   for (let i = 0; i < word.length; i++) {
//     for (let j = 0; j < alpha.length; j++) {
//       let temp = word[i];
//       word[i] = alpha[j];
//       //   console.log(word);
//       if (wordList.includes(word.join(""))) {
//         res.add(word.join(""));
//       }
//       word[i] = temp;
//     }
//   }
//   return res;
// };

// let wordList = ["cold", "gold", "cord", "card", "ward", "warm", "tard", "sold"];
// console.log(getNeighbors("cold"));
