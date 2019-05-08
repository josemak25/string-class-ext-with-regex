// setting isQuestion method to string protoype

String.prototype.isQuestion = function() {
  var isQuestion = /\w.+\?/gi; // setting regex pattern to match agains't string

  /**
   * ********this*********
   * this in the context points to the string calling the function.
   * *******test*******
   * test a regex method often used to check if something
   * is true or false using the regex pattern given
   *
   * ******true / false ********
   *returning true if the word is a question or false if its not
   *
   */

  return isQuestion.test(this) ? true : false;
};
