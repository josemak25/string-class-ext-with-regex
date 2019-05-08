// setting toUpper method to string protoype

String.prototype.toUpper = function() {
  var stringPattern = /\w.*?/g;

  /**
   * ********this*********
   * this in the context points to the string calling the function.
   * *******replace*******
   * replace a string method often used by regex  to
   * help replace matched test agains't the regex patten (stringPattern)
   *
   *On this regex , it takes a call back function (changeToUpper)
   *changeToUpper(pram) take a parameter which is the current
   * character in iteration from replace and it checks the element
   * ASCII code and return a upperCase  of the character if it falls with the given range
   */

  return this.replace(stringPattern, changeToUpper);
};

function changeToUpper(char) {
  return char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122 ? String.fromCharCode(char.charCodeAt(0) - 32) : char;
}
