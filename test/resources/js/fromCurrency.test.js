var fromCurrency = require('../../../resources/js/fromCurrency');

describe('TEST A STRING IN REPRESENTATIVE FORM OF CURRENCY AND RETURN A NUMBER FORM OF IT', function() {
  it('return a string of numbers in a currency representative form', function() {
    var result = '11,111.11'.fromCurrency();
    expect(result).toBe(11111.11);
    expect(typeof result).toBe('number');
  });
});
