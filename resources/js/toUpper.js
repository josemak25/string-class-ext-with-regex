String.prototype.toUpper = function() {
  var characters = this;
  var stringPattern = /\w.*?/g;
  return characters.replace(stringPattern, changeToUpper);
};

function changeToUpper(char) {
  return char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122 ? String.fromCharCode(char.charCodeAt(0) - 32) : char;
}
