var toUpper = require('./toUpper'); // importing to upperCase stirng method

// setting ucFirst method to string protoype

String.prototype.ucFirst = function() {
  var ucFirstPattern = /^[a-zA-Z]/; // the regex matches the first character from the string for small letter or Captial letter
  /* Replaces the first character on the string with upperCase
   * if  ucFirstPattern return true as a lowercase letter else returns the letter
   */
  return ucFirstPattern.test(this) ? this.charAt(0).toUpper() + this.substring(1) : Object.values(this).join('');
};
