// setting splitIntoWords method to string protoype

String.prototype.splitIntoWords = function() {
  var word = /\w+/g; // setting regex pattern to match agains't string

  /**
   * ********this*********
   * this in the context points to the string calling the function.
   * *******test*******
   * (match) a regex method often used to check if a regular(word) pattern
   * is contained in a srting.
   * if true match returns an array
   *
   *return each matched word pattern value from the
   *  string(this) in check in an array
   */

  return this.match(word);
};
