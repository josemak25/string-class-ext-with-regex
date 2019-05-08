// setting toLower method to string protoype

String.prototype.toLower = function() {
  var stringPattern = /\w.*?/g; // setting regex pattern to match agains't string

  /**
   * ********this*********
   * this in the context points to the string calling the function.
   * *******replace*******
   * replace a string method often used by regex  to
   * help replace matched test agains't the regex patten (stringPattern)
   *
   *On this regex , it takes a call back function (changeToLower)
   *changeToLower(pram) take a parameter which is the current
   * character in iteration from replace and it checks the element
   * ASCII code and return a lowerCase  of the character if it falls with the given range
   */

  return this.replace(stringPattern, changeToLower);
};

function changeToLower(char) {
  return char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90 ? String.fromCharCode(char.charCodeAt(0) + 32) : char;
}
