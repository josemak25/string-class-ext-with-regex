var wordCount = require('../../../resources/js/wordCount');

describe('TEST A STRING AN RETURN ALL WORDS IN THE STRING', function() {
  it('return an array of words in string when function is called on a string', function() {
    var result = 'Programmings courses always starts with hello world example'.wordCount();
    expect(result).toBe(8);
  });
});
