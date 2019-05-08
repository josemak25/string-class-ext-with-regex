var inverseCase = require('../../../resources/js/inverseCase');

describe('TEST A STRING  WITH LOWER CASE AND UPPERCASE CHARACTERS AND RETURN AND INVERSE OF THE LOWERCASE TO UPPERCASE AND UPPERCASE TO LOWERCASE', function() {
  it('return an inverse of a string characters from lower case to uppercase and uppercase to lowercase', function() {
    var result = 'Mr. Ben'.inverseCase();
    expect(result).toBe('mR. bEN');
  });
});
