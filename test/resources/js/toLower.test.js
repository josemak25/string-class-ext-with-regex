var toLower = require('../../../resources/js/toLower');

describe('TEST A STRING  WITH AN LOWER CASE CHARACTER AND RETURN STRING WITH ALL CHARACTERS IN LOWERCASE', function() {
  it('return a string of uppercase to lower', function() {
    var result = 'ProgrAmMinG IS CoOl'.toLower();
    expect(result).toBe('programming is cool');
  });
});
