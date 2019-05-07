var hasVowels = require('../../../resources/js/hasVowels');

describe('TEST FOR VOWELS IN A STRING', () => {
  it('return true if string contains vowel letters', () => {
    var result = 'encyclopedia'.hasVowels();
    expect(result).toBe(true);
  });
  it('return true if string contains vowel letters', () => {
    var result = 'rhythm'.hasVowels();
    expect(result).toBe(false);
  });
});
