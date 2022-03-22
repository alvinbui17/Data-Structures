var fs = require('fs');
var path = require('path');

var getWordCount = function(filePath, callback) {
  fs.readFile(filePath, 'utf-8', function(err, data) {
    if (err) {
      callback(err, null);
      return;
    }

    var wordCount = data.trim().split(' ').length;
    callback(null, wordCount);
  });
};

var getTotalWordCount = function(filePathOne, filePathTwo, callback) {
  let one = callback(filePathOne)
  let two = callback(filePathTwo)

  return one + two
};

getTotalWordCount('/Users/tiffanyvu/hr-lax49-self-assessment-week-04-v7/async-word-count/files/fileOne.txt', './files/fileTwo.txt', getWordCount)

module.exports = getTotalWordCount;
/Users/tiffanyvu/hr-lax49-self-assessment-week-04-v7/async-word-count/files/fileOne.txt