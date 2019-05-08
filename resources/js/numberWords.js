String.prototype.numberWords = function() {
  var wordHolder = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  var digitPattern = /\d/g;
  return this.replace(digitPattern, function(num) {
    return wordHolder[num].concat(' ');
  });
};
