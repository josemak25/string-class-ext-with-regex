var toUpper = require('./toUpper'); // requiring custom toUpper method
var toLower = require('./toLower'); // requiring custom toLower method

// setting alternatingCase method to string protoype

String.prototype.alternatingCase = function() {
  var checkString = /\w/g; // setting regex pattern to match agains't string

  /**
   * ********this*********
   * this in the context points to the string calling the function.
   * *******replace*******
   * replace a string method often used by regex  to
   * help replace matched test agains't the regex patten (checkString)
   *
   * Applying modulus to our index of a current character on the iteration
   * We divide by index by 2 which gives us a fair application of our toUpper
   * and lowerCase method on the current character if the results from
   * module is even or odd leaving our odd numbers toLower and even toUpper
   *
   */

  return this.replace(checkString, function(char, index) {
    return index % 2 === 0 ? char.toLower() : char.toUpper();
  });
};
