// setting numberWords method to string protoype

String.prototype.numberWords = function() {
  // set wordHolder for comparing and returning matched value of a digit for its word case
  var wordHolder = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  var digitPattern = /\d/g; // the regex matches all numbers found on the string
  /*
   * Using the defined digitPattern to replace a digit
   * with its word in string if the number matches the
   * index of a word in the wordHolder array and return the
   * result of each matched value with a concanted string space to serprate each word
   */
  return this.replace(digitPattern, function(number) {
    return wordHolder[number].concat(' ');
  });
};
