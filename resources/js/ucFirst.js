var toUpper = require('./toUpper');

String.prototype.ucFirst = function() {
  var word = this;
  var ucFirstPattern = /^[a-zA-Z]/;
  return ucFirstPattern.test(word) ? word.charAt(0).toUpper() + word.substring(1) : Object.values(word).join('');
};
