const { min } = require("bn.js");

let input = [17, 4, 5, 6, 10, 11, 4, -3, -5, 3, 15, 2, 7];

let arrayChallege = (arr) => {
  let myArr = arr;

  let target = arr.shift();

  let compMap = new Map();

  let res = [];

  myArr.forEach((num, index) => {
    if (compMap.has(num)) {
      res.push([target - num, num]);
    } else {
      let comp = target - num;
      compMap.set(comp, 1);
    }
  });

  return res;
};

console.log(arrayChallege(input));

let input2 = ["baseball", "a,all,b,ball,bas,base,cat,code,d,e,quit,z"];

let arraySearch = (arr) => {
  let minNumberToRemove = Number.MAX_VALUE;
  let searchWord = arr[0];

  let searchWordCharCount = {};

  for (let letter of searchWord) {
    if (searchWordCharCount[letter]) {
      searchWordCharCount[letter]++;
    } else {
      searchWordCharCount[letter] = 1;
    }
  }

  let searchArr = arr[1].split(",");

  for (let word of searchArr) {
    let mapCopy = JSON.parse(JSON.stringify(searchWordCharCount));
    for (let char of word) {
      if (mapCopy[char]) {
        mapCopy[char]--;
      }
    }
    const sumOfCounts = Object.values(mapCopy).reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );
    // console.log(
    //   Object.values(mapCopy),
    //   searchWord.length - searchWord.length - sumOfCounts * -1
    // );
    minNumberToRemove = Math.min(
      minNumberToRemove,
      searchWord.length - searchWord.length - sumOfCounts * -1
    );
  }

  return minNumberToRemove;
};

console.log(arraySearch(input2));
