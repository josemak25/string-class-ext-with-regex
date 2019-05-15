var isQuestion = require('../../../resources/js/isQuestion');

describe('TEST A SENTENCE IF ITS A QUESTION', function() {
  it('return true if sentence is a question', function() {
    var result = 'what are programming languages?'.isQuestion();
    expect(result).toBeTruthy;
  });
  it('return false if sentence is a question', function() {
    var result = 'this is an essential part of building'.isQuestion();
    expect(result).toBeFalsy;
  });
});
