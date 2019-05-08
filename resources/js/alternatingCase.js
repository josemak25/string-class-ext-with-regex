var customMap = require('../helpers/customHighOrderFunctions');
var toUpper = require('./toUpper');
var toLower = require('./toLower');

String.prototype.inverseCase = function() {
  var splitedCharacters = this.split('');
  return customMap
    .call(splitedCharacters, function(char, index) {
      return index % 2 === 0 ? char.toLower() : char.toUpper();
    })
    .join('');
};
