var toUpper = require('../../../resources/js/toUpper');

describe('TEST A STRING  WITH AN LOWER CASE CHARACTER AND RETURN STRING WITH ALL CHARACTERS IN UPPERCASE', function() {
  it('return a string of lower to uppercase', function() {
    var result = 'ProgrAmminG is cool'.toUpper();
    expect(result).toBe('PROGRAMMING IS COOL');
  });
});
