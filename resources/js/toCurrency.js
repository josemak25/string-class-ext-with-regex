String.prototype.toCurrency = function() {
  var toCurrencyPattern = /(\d)(?=(\d{3}){1,}\.)/g;
  return this.replace(toCurrencyPattern, '$1,');
};
