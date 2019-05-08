String.prototype.toUpper = function() {
  var characters = this;
  var stringPattern = /\w.*?/g;
  return characters.replace(stringPattern, changeToUpper);
};

function changeToUpper(char) {
  return String.fromCharCode(char.charCodeAt(0) & 223);
}
