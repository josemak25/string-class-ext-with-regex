String.prototype.toLower = function() {
  var characters = this;
  var stringPattern = /\w.*?/g;
  return characters.replace(stringPattern, changeToLower);
};

function changeToLower(char) {
  return char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90 ? String.fromCharCode(char.charCodeAt(0) + 32) : char;
}
