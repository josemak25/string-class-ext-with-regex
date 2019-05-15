// setting toCurrency method to string protoype

String.prototype.toCurrency = function() {
  /* setting regex pattern to match agains't string checking if it has digit
   *and applying look ahead to capture any number after 3 digit space
   */
  var toCurrencyPattern = /(\d)(?=(\d{3}){1,}\.)/g;
  /* Using the defined toCurrencyPattern to match all found digits after 3 digit spaces
   *and replace them by putting a comma , in front of them with the help of $1
   *which stands as the caputred group been group 1 from our toCurrencyPattern
   */
  return this.replace(toCurrencyPattern, '$1,');
};
