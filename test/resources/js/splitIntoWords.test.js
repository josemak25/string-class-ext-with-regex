var splitIntoWords = require('../../../resources/js/splitIntoWords');

describe('TEST A STRING AN RETURN ALL WORDS IN THE STRING', function() {
  it('return an array of words in string when function is called on a string', function() {
    var result = 'what are programming languages?'.splitIntoWords();
    expect(result).toContainEqual('what', 'are ', 'programming', 'languages');
  });
});
