// On an infinite plane, a robot initially stands at (0, 0) and faces north. The robot can receive one of three instructions:

// "G": go straight 1 unit;
// "L": turn 90 degrees to the left;
// "R": turn 90 degrees to the right.
// The robot performs the instructions given in order, and repeats them forever.

// Return true if and only if there exists a circle in the plane such that the robot never leaves the circle.

// instructions = "GGLLGG"

var isRobotBounded = function (instructions) {
  let [dx, dy] = [0, 1]; // start facing North
  let [x, y] = [0, 0];
  for (let letter of instructions) {
    if (letter === "L") {
      [dx, dy] = [-dy, dx];
    } else if (letter === "R") {
      [dx, dy] = [dy, -dx];
    } else {
      // if G
      [x, y] = [x + dx, y + dy];
    }
  }

  let resultBool = (x === 0 && y === 0) || dx !== 0 || dy !== 1;
  // console.log(x, y, dx, dy);
  return resultBool;
};

const instructions = "GLL";
console.log(isRobotBounded(instructions));
