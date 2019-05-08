String.prototype.inverseCase = function() {
  var stringPattern = /[a-zA-Z]/g;
  return this.replace(stringPattern, inverseCharacter);
};

function inverseCharacter(char) {
  return char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90
    ? String.fromCharCode(char.charCodeAt(0) + 32)
    : String.fromCharCode(char.charCodeAt(0) - 32);
}
