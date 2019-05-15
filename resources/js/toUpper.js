// setting toUpper method to string protoype

String.prototype.toUpper = function() {
  var stringPattern = /\w.*?/g; // the regex matches all characters from lower case to uppercase on the string
  /*
   * Using the defined stringPattern to replace any upperCase character with a upper case
   * when the character is been comfirm to be lowerCase by the changeToLower function
   *  using the ASCII code of the  character
   */
  return this.replace(stringPattern, changeToUpper);
};

function changeToUpper(char) {
  if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
    return String.fromCharCode(char.charCodeAt(0) - 32);
  }
  return char;
}
