// setting inverseCase method to string protoype

String.prototype.inverseCase = function() {
  var stringPattern = /[a-zA-Z]/g; // the regex matches all alphabets from small letter to capital letters on the string
  /*
   * Using the defined stringPattern to replace a letter
   *from lower to capital and capital to lowerCase using
   * the inverseCharacter function which converts using the ASCII code of each found character
   */
  return this.replace(stringPattern, inverseCharacter);
};

function inverseCharacter(char) {
  if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
    return String.fromCharCode(char.charCodeAt(0) + 32);
  }
  return String.fromCharCode(char.charCodeAt(0) - 32);
}
