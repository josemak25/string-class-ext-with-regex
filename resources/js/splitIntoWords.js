// setting splitIntoWords method to string protoype

String.prototype.splitIntoWords = function() {
  var wordPattern = /\w+/g; // the regex matches a string for all words and characters
  // test the string for matches using wordPattern and return an array of all matched words on the string
  return this.match(wordPattern);
};
