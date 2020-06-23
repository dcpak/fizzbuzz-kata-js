const fizzbuzz = require('./fizzbuzz');

module.exports = function fizzbuzz_program(l) {
  let r = '';
  for (let i = 1; i <= l; i++)
    r += fizzbuzz(i) + ',';
  return r.slice(0, -1);
}
