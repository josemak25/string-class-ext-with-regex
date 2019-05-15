// setting toLower method to string protoype

String.prototype.toLower = function() {
  var stringPattern = /\w.*?/g; // the regex matches all characters from lower case to uppercase on the string
  /*
   * Using the defined stringPattern to replace any upperCase character with a lower case
   * when the character is been comfirm to be upperCase by the changeToLower function
   *  using the ASCII code of the  character
   */
  return this.replace(stringPattern, changeToLower);
};

function changeToLower(char) {
  if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
    return String.fromCharCode(char.charCodeAt(0) + 32);
  }
  return char;
}
