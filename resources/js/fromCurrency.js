String.prototype.fromCurrency = function() {
  var fromCurrencyPattern = /,/g;
  return Number(this.replace(fromCurrencyPattern, ''));
};
