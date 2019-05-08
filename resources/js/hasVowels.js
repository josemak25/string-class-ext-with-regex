// setting hasVowels method to string protoype

String.prototype.hasVowels = function() {
  var vowel = /[aeiou]/gi; // setting regex pattern to match agains't string

  /**
   * ********this*********
   * this in the context points to the string calling the function.
   * *******test*******
   * test a regex method often used to check if something
   * is true or false using the regex pattern given
   *
   * ******true / false ********
   *returning true  or false if the string has a vowel letter on it or not
   *
   */

  return vowel.test(this) ? true : false;
};
