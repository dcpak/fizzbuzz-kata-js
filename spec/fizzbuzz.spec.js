describe('Fizz Buzz', function () {

    [
        [1, '1'],
        [2, '2'],
        [3, 'Fizz'],
        [6, 'Fizz'],
        [5, 'Buzz'],
        [10, 'Buzz'],
        [15, 'FizzBuzz'],
        [45, 'FizzBuzz']
    ].forEach(function(params) {
        var input = params[0], expected = params[1];

        it('gives answer ' + expected + ' for ' + input, function () {
            expect(fizzbuzz(input)).toEqual(expected);
        });

    });

    describe('haz all da numberz till', function() {
        [
            [1, '1'],
            [2, '1,2'],
            [3, '1,2,Fizz']
        ].forEach(function(params) {
            var input = params[0], expected = params[1];

            it('' + input, function () {
                expect(fizzbuzz_numbers(input)).toEqual(expected);
            });

        });
    })
});