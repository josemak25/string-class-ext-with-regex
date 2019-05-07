String.prototype.hasVowels = function() {
  var vowel = /[aeiou]/gi;
  return vowel.test(this) ? true : false;
};
