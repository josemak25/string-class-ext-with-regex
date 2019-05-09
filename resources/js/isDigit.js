// setting isDigit method to string protoype

String.prototype.isDigit = function() {
  var digitPattern = /^[0-9]{1}$/; // the regex matches number as a single digit on the string
  // if  the digit in the string is found to be a single number as test by  digitPattern it return true else return false
  return digitPattern.test(this) ? true : false;
};
