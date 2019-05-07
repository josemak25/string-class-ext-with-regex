var isQuestion = require('../../../resources/js/isQuestion');

describe('TEST A SENTENCE IF ITS A QUESTION', () => {
  it('return true if sentence is a question', () => {
    var result = 'what are programming languages?'.isQuestion();
    expect(result).toBe(true);
  });
  it('return false if sentence is a question', () => {
    var result = 'this is an essential part of building'.isQuestion();
    expect(result).toBe(false);
  });
});
