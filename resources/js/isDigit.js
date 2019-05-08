// setting isDigit method to string protoype

String.prototype.isDigit = function() {
  var digit = /^[0-9]{1}$/; // setting regex pattern to match agains't string

  /**
   * ********this*********
   * this in the context points to the string calling the function.
   * *******test*******
   * test a regex method often used to check if something
   * is true or false using the regex pattern given
   *
   * ******true / false ********
   *returning true if the string is a one letter digit or if its not
   *
   */

  return digit.test(this) ? true : false;
};
