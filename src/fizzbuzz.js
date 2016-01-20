function fizzbuzz(number) {
    if (number % 15 == 0) {
        return 'FizzBuzz';
    }
    if (number % 3 == 0) {
        return 'Fizz';
    }
    if (number % 5 == 0) {
        return 'Buzz';
    }
    return number.toString();
}

function fizzbuzz_numbers(limit) {
    var result = '';
    for (var i = 1; i <= limit; i++) {
        result += fizzbuzz(i) + ',';
    }
    return result.substr(0, result.length-1);
}

console.log(fizzbuzz_numbers(100));