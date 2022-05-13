function numSteps(combo, trappedCombos) {
  function getNeighbors(combo) {
    let a = combo.split("").map((x) => parseInt(x));
    let res = [];
    let delta = [1, -1];
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < delta.length; j++) {
        let temp = a[i];
        a[i] = (a[i] + delta[j] + 10) % 10;
        if (!trappedCombos.includes(a.join(""))) {
          res.push(a.join(""));
        } else {
          //   console.log("FOUND A TRAP", a.join(""));
        }
        a[i] = temp; // Resetting the value;
      }
    }
    // console.log(`neighbor of ${combo}: ${res}`);
    return res;
  }

  let moves = 0;
  let visited = new Map();
  visited.set("0000", 1);
  let queue = ["0000"];

  while (queue.length) {
    let n = queue.length;
    console.log("going into next level");
    for (let i = 0; i < n; i++) {
      let node = queue.shift();
      if (node === combo) return moves;
      for (let x of getNeighbors(node)) {
        if (!visited.get(x)) {
          visited.set(x, 1);
          queue.push(x);
        }
      }
    }
    // every time neighbors of a combo is exhausted and target is not found
    // then increment moves
    moves++;
  }
  return -1;
}

let combo = "0101";
let trapped = ["0110", "1000"];

console.log(numSteps(combo, trapped));
