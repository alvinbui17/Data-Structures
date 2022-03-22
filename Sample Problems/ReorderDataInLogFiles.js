const reorderLogFiles = (logs) => {
  const body = (s) => s.slice(s.indexOf(" ") + 1); // get string body after identifier
  const isNum = (c) => /\d/.test(c); // regex test for whether string body contains digits

  // if string bodies are equal then compare indentifiers
  const compare = (a, b) => {
    const n = body(a).localeCompare(body(b));
    if (n !== 0) return n;
    // console.log(a.localeCompare(b), a, b);
    return a.slice(0, a.indexOf(" ")).localeCompare(b.slice(0, b.indexOf(" ")));
  };

  const digitLogs = [];
  const letterLogs = [];
  for (const log of logs) {
    // console.log(body(log), isNum(body(log)), typeof body(log));
    if (isNum(body(log))) {
      digitLogs.push(log);
    } else letterLogs.push(log);
  }

  // sort has time comp of O(nlogn) and each invocation of compare could
  // take up to O(m) time where m is the number of logs being compared
  // ==== overall time of O(mnlogn) ====

  // Array.sort() is based on quick sort and has space complexity of
  // O(logn) and each log could be of O(m) space, we would need
  // O(mlogn) space to hold intermediate values for sorting

  return [...letterLogs.sort(compare), ...digitLogs];
};

let logs = [
  "dig1 8 1 5 1",
  "let1 art can",
  "dig2 3 6",
  "let2 own kit dig",
  "let3 art can",
];

console.log(reorderLogFiles(logs));
