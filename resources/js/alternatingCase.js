var toUpper = require('./toUpper'); // requiring custom toUpper method
var toLower = require('./toLower'); // requiring custom toLower method

// setting alternatingCase method to string protoype

String.prototype.alternatingCase = function() {
  var regexCharacter = /\w/g; // the regex matches all alphabets and numbers on the string
  /*
   * Applying modulus to our index to turn all odd  index alphabets to lowerCase
   * and even to upperCase
   */
  return this.replace(regexCharacter, function(char, index) {
    return index % 2 === 0 ? char.toLower() : char.toUpper();
  });
};
