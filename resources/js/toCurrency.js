// setting toCurrency method to string protoype

String.prototype.toCurrency = function() {
  var toCurrencyPattern = /(\d)(?=(\d{3}){1,}\.)/g; // setting regex pattern to match agains't string

  /**
   * ********this*********
   * this in the context points to the string calling the function.
   * *******replace*******
   * replace a string method often used by regex  to
   * help replace matched test agains't the regex patten (stringPattern)
   *
   *On this regex ,it return the string (this)
   *  as a currency digit using the matches passed as regex pattern (toCurrencyPattern)
   */

  return this.replace(toCurrencyPattern, '$1,');
};
