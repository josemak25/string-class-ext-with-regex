String.prototype.splitIntoWords = function() {
  var word = /\w+/g;
  return this.match(word);
};
