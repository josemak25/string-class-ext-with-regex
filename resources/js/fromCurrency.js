// setting fromCurrency method to string protoype

String.prototype.fromCurrency = function() {
  var fromCurrencyPattern = /,/g; // setting regex pattern to match agains't string

  /**
   * ********this*********
   * this in the context points to the string calling the function.
   * *******replace*******
   * replace a string method often used by regex  to
   * help replace matched test agains't the regex patten (fromCurrencyPattern)
   *
   * ******Number********
   * getting the return value of our replce method using
   * the passed regex pattern and converting it to a number
   *
   */

  return Number(this.replace(fromCurrencyPattern, ''));
};
