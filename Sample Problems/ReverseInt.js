/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let min = -1 * 2 ** 31;
  let max = 2 ** 31 - 1;

  let polarity = 1;
  let newInt = 0;

  let splitX = x.toString().split("");

  if (splitX[0] === "-") {
    polarity = -1;
    splitX.shift();
  }

  for (let i = splitX.length - 1; i >= 0; i--) {
    newInt = newInt * 10 + parseInt(splitX[i]);
    if (newInt * polarity < min || newInt * polarity > max) {
      return 0;
    }
  }
  return newInt * polarity;
};
