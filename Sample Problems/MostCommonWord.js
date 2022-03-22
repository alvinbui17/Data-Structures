/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
  let clean_par = paragraph.toLowerCase().split(/[\!\?\'\,\;\.\s]/);

  let newBan = banned;

  newBan.push("");

  let start = 0;
  let end = clean_par.length - 1;

  let counts = new Map();

  let max = ["", 0];

  clean_par.forEach((word) => {
    if (!newBan.includes(word)) {
      if (counts.get(word) === undefined) {
        counts.set(word, 1);
        if (counts.get(word) > max[1]) {
          max[1] = counts.get(word);
          max[0] = word;
        }
      } else {
        counts.set(word, counts.get(word) + 1);
        if (counts.get(word) > max[1]) {
          max[1] = counts.get(word);
          max[0] = word;
        }
      }
    }
  });
  console.log(counts, clean_par, max);
  return max[0];
};

console.log(mostCommonWord("a.", []));
