var ucFirst = require('../../../resources/js/ucFirst');

describe('TEST A STRING  WITH A LOWER CASE CHARACTER AS ITS FIRST CHARCATER AND RETURN THE STRING WITH THE FIRST CHARACTER IN UPPERCASE', function() {
  it('return a string of the first character from lower case to uppercase', function() {
    var result = 'cool'.ucFirst();
    expect(result).toBe('Cool');
  });
  it('return initial string if the word starts with a digit', function() {
    var result = '1cool'.ucFirst();
    expect(result).toBe('1cool');
  });
});
