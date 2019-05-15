var hasVowels = require('../../../resources/js/hasVowels');

describe('TEST FOR VOWELS IN A STRING', function() {
  it('return true if string contains vowel letters', function() {
    var result = 'encyclopedia'.hasVowels();
    expect(result).toBeTruthy;
  });
  it('return true if string contains vowel letters', function() {
    var result = 'rhythm'.hasVowels();
    expect(result).toBeFalsy;
  });
});
