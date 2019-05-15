var isDigit = require('../../../resources/js/isDigit');

describe('TEST A STRING IF IT HAS A SINGLE DIGIT NUMBER', function() {
  it('return true if a string has a single digit number on it', function() {
    var result = '3'.isDigit();
    expect(result).toBeTruthy;
  });
  it('return false if a string has a more than a single digit on it', function() {
    var result = '34'.isDigit();
    expect(result).toBeFalsy;
  });
  it('return false if a string has an alphabet and not a digit on it', function() {
    var result = 'GOT'.isDigit();
    expect(result).toBeFalsy;
  });
});
