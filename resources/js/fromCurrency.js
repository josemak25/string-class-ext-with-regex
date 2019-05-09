// setting fromCurrency method to string protoype

String.prototype.fromCurrency = function() {
  var fromCurrencyPattern = /,/g; // the regex matches only character as  , found on the string
  //Using the defined fromCurrencyPattern to replace all , with empty '' string
  return Number(this.replace(fromCurrencyPattern, ''));
};
