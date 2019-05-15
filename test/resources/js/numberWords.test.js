var numberWords = require('../../../resources/js/numberWords');

describe('TEST A STRING  WITH DIGITS AND RETURN AN  WORD REPRESENTATION OF THE DIGIT', function() {
  it('return the word representation of string digit', function() {
    var result = '325'.numberWords();
    expect(result).toMatch('three two five');
  });
});
