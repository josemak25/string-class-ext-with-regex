// setting numberWords method to string protoype

String.prototype.numberWords = function() {
  // set wordHolder for comparing and returning matched value of a digit for its word case

  var wordHolder = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  var digitPattern = /\d/g; // setting regex pattern to match agains't string

  /**
   * ********this*********
   * this in the context points to the string calling the function.
   * *******test*******
   * test a regex method often used to check if something
   * is true or false using the regex pattern given
   *
   *returning each matched digit value from the
   *  wordHolder from which each replace iteration is made
   * and concant the results in the end of each iteration
   */

  return this.replace(digitPattern, function(num) {
    return wordHolder[num].concat(' ');
  });
};
