var alternatingCase = require('../../../resources/js/alternatingCase');

describe('TEST A STRING  WITH WORDS AND RETURN AN ALTERNATIVE CASE OF ITS CHARACTERS', function() {
  it('return an alternating case of a string characters from lower case to uppercase and uppercase to lowercase', function() {
    var result = 'Onomatopoeia'.inverseCase();
    expect(result).toBe('oNoMaToPoEiA');
  });
  it('return the alternating case of string with character of the word is a lower case letter or a digit', function() {
    var letterResult = 'onomatopoeia'.inverseCase();
    var digitResult = '2lang3u32ag1es2'.inverseCase();
    expect(letterResult).toBe('oNoMaToPoEiA');
    expect(digitResult).toBe('2LaNg3u32Ag1eS2');
  });
});
