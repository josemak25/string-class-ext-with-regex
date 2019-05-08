const splitIntoWords = require('./splitIntoWords'); // importing splitintoWords string method

// setting wordCount method to string protoype

String.prototype.wordCount = function() {
  /**
   * ********this*********
   * this in the context points to the string calling the function.
   *
   *splitedWords takes the return array produced by splitIntoWords function
   *and returns the array length as the number of words in count on the string (this)
   */

  var splitedWords = this.splitIntoWords();
  return splitedWords.length;
};
