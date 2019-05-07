String.prototype.isQuestion = function() {
  var isQuestion = /\w.+\?/gi;
  return isQuestion.test(this) ? true : false;
};
