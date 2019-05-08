var toCurrency = require('../../../resources/js/toCurrency');

describe('TEST A STRING OF DIGITS AND RETURN THEM IN A REPRESENTATIVE FORM OF CURRENCY', function() {
  it('return a string of numbers in a currency representative form', function() {
    var result = '11111.11'.toCurrency();
    expect(result).toBe('11,111.11');
  });
});
