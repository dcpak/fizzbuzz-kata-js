const fizzbuzz = require('./fizzbuzz');

module.exports = function fizzbuzz_game(limit) {
  var result = '';
  for (var i = 1; i <= limit; i++) {
    result += fizzbuzz(i) + ',';
  }
  return result.substr(0, result.length-1);
}
