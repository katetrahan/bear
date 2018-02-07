var RomanNum = require('./../js/romancalc.js').romanNumModule;

var numToRoman;

beforeEach(function() {
  numToRoman = new RomanNum("ten");
})

describe('RomanNum', function() {

  it('should test whether a number coverts to the correct roman numeral', function() {
    var output = "";
    output = numToRoman.converter(10);
    expect(output).toEqual("X");

    output = numToRoman.converter(20);
    expect(output).toEqual("XX");
  });

  it('should give string when requested number to convert is > 3999', function() {
    var output = "";
    output = numToRoman.converter(4000);
    expect(output).toEqual("Number too high");
  });

});
