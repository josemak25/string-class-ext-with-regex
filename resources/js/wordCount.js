const splitIntoWords = require('./splitIntoWords'); // importing splitintoWords string method

// setting wordCount method to string protoype

String.prototype.wordCount = function() {
  //returns a number of how many words are in the string using with the help of
  //splitIntoWords function which matches all words in the string and returns an array
  var splitedWords = this.splitIntoWords();
  return splitedWords.length;
};
