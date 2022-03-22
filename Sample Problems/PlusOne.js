/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  //   let carry = 0;
  let carry = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    // if (i === digits.length - 1) {
    //   digits[i]++;
    // }
    if (digits[i] + carry < 10) {
      digits[i] += carry;
      carry = 0;
      break;
    } else {
      digits[i] = digits[i] + carry - 10;
      carry = 1;
    }
  }
  if (carry === 1) {
    digits.unshift(1);
  }
  return digits;
};

console.log(plusOne([1, 9, 8, 9, 9, 9]));

let str = "  ";
console.log(str.split(" "));
