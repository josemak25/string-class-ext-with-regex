String.prototype.hasVowels = function() {
  var vowelPattern = /[aeiou]/gi;
  return vowelPattern.test(this) ? true : false;
};
