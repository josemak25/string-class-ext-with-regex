var customForEach = require('../helpers/customHighOrderFunctions');
var toUpper = require('./toUpper');
var toLower = require('./toLower');

String.prototype.inverseCase = function() {
  var splitCharacters = this.split('');
  var formedWord = '';
  var stringPattern = /[a-z]/;
  customForEach.call(splitCharacters, function(char) {
    return stringPattern.test(char) ? formedWord += char.toUpper() : formedWord += char.toLower();
  });
  return formedWord;
};
