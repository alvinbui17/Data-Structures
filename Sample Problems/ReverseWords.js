var reverseWords = function (s) {
  let string = s.split(" ").filter((word) => word.length !== 0);

  let newStr = "";

  for (let i = string.length - 1; i >= 0; i--) {
    if (string[i].length !== 0) {
      newStr += string[i] + " ";
    }
  }
  return newStr.trim();
};
