String.prototype.isDigit = function() {
  var digit = /^[0-9]{1}$/;
  return digit.test(this) ? true : false;
};
