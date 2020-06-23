module.exports = function fizzbuzz(n) {
  let r = '';
  if(n%3 === 0)
    r = 'Fizz';
  if(n%5 === 0)
    r += 'Buzz';
  if(!r)
    r = n;
  return r;
};
