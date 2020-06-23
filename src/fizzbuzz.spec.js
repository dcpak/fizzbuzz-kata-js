const fizzbuzz = require('./fizzbuzz');
const fizzbuzz_program = require('./fizzbuzz_program');

describe('check FizzBuzz from 1 to 20', function () {

  [
    [1, 1],
    [2, 2],
    [3, 'Fizz'],
    [4, 4],
    [5, 'Buzz'],
    [6, 'Fizz'],
    [7, 7],
    [8, 8],
    [9, 'Fizz'],
    [10, 'Buzz'],
    [11, 11],
    [12, 'Fizz'],
    [13, 'Fizz'],
    [14, 14],
    [15, 'FizzBuzz'],
    [16, 16],
    [17, 17],
    [18, 'Fizz'],
    [19, 19],
    [20, 'Buzz'],
    [31, 'Fizz'],
    [32, 'Fizz'],
    [33, 'Fizz'],
    [34, 'Fizz'],
    [35, 'FizzBuzz'],
    [36, 'Fizz'],
    [48, 'Fizz'],
    [49, 49],
    [50, 'Buzz'],
    [51, 'FizzBuzz'],
    [52, 'Buzz'],
    [56, 'Buzz'],
    [57, 'FizzBuzz']
  ].forEach(function(params) {
    it('answers ' + params[1] + ' for ' + params[0], function() {
      expect(fizzbuzz(params[0])).toEqual(params[1]);
    })
  });

  describe('check FizzBuzz program', function() {
    [
      [1, '1'],
      [2, '1,2'],
      [3, '1,2,Fizz']
    ].forEach(function(params) {
      it('answers numbers ' + params[1] + ' for ' + params[0], function() {
        expect(fizzbuzz_program(params[0])).toEqual(params[1]);
      });

    });
  });

});
