const splitIntoWords = require('./splitIntoWords');

String.prototype.wordCount = function() {
  var splitedWords = this.splitIntoWords();
  return splitedWords.length;
};
