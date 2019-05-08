var toUpper = require('./toUpper');
var toLower = require('./toLower');

String.prototype.alternatingCase = function() {
  var checkString = /\w/g;
  return this.replace(checkString, function(char, index) {
    return index % 2 === 0 ? char.toLower() : char.toUpper();
  });
};
