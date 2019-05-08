var toUpper = require('./toUpper'); // importing to upperCase stirng method

// setting ucFirst method to string protoype

String.prototype.ucFirst = function() {
  var ucFirstPattern = /^[a-zA-Z]/; // setting regex pattern to match agains't string

  /**
   * ********this*********
   * this in the context points to the string calling the function.
   * *******test*******
   * test a regex method often used to check if something
   * is true or false using the regex pattern given
   *
   *On this regex , test string against the regex pattern (ucFirstPattern)
   * if character is a string regex converts the first cahracter to Uppercase
   * using the string charAt(pram) method
   * if (this) is not a string Object.values(this) gets all values
   * of the string and return them by using the string join method
   */

  return ucFirstPattern.test(this) ? this.charAt(0).toUpper() + this.substring(1) : Object.values(this).join('');
};
