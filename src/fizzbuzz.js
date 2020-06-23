module.exports = function fizzbuzz(n) {
  let r = '';
  if(n%3 === 0 || ('' + n).indexOf('3') !== -1)
    r = 'Fizz';
  if(n%5 === 0 || ('' + n).indexOf('5') !== -1)
    r += 'Buzz';
  if(n%7 === 0 || ('' + n).indexOf('7') !== -1)
    r += 'Bar';
  if(!r)
    r = n;
  return r;
};
