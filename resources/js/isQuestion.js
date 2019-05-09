// setting isQuestion method to string protoype

String.prototype.isQuestion = function() {
  var isQuestion = /\w.+\?/gi; // the regex matches a string if it ends with a question mark ?
  // if  the string ends with a question mark as tested by  isQuestion it return true else return false
  return isQuestion.test(this) ? true : false;
};
