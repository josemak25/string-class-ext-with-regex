// setting hasVowels method to string protoype

String.prototype.hasVowels = function() {
  var vowelPattern = /[aeiou]/gi; // the regex matches any character within the given letters (aeiou)
  // if  any charater in the string is found to be any of the letters by our vowelPattern it return true else return false
  return vowelPattern.test(this) ? true : false;
};
