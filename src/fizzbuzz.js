module.exports = function fizzbuzz(n) {
  let r = '';
  if(n%3 === 0 || ('' + n).indexOf('3') !== -1)
    r = 'Fizz';
  if(n%5 === 0 || ('' + n).indexOf('5') !== -1)
    r += 'Buzz';
  if(!r)
    r = n;
  return r;
};
