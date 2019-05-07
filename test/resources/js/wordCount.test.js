var wordCount = require('../../../resources/js/wordCount');

describe('TEST A STRING AN RETURN THE NUMBER OF WORDS IN THE STRING', function() {
  it('return a number of the words in a string when function is called on a string', function() {
    var result = 'Programmings courses always starts with hello world example'.wordCount();
    expect(result).toBe(8);
  });
});
