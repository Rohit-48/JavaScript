// Question 1: 2629. Function Composition

// Define the compose function
function compose(functions) {
    return function(x) {
        return functions.reduceRight((acc, fn) => fn(acc), x); // f1(f2(f3(x)))
    };
}

// Test functions
const addOne = x => x + 1;
const square = x => x * x;
const double = x => 2 * x;

// Test cases
const fn1 = compose([addOne, square, double]);
console.log(fn1(4)); // Expected output: 65

/* line 53-54 code explanation
First, x => 10 * x is applied to 1, resulting in 10.
Next, x => 10 * x is applied to 10, resulting in 100.
Finally, x => 10 * x is applied to 100, resulting in 1000.
*/
const fn2 = compose([x => 10 * x, x => 10 * x, x => 10 * x]);
console.log(fn2(1)); // Expected output: 1000

const fn3 = compose([]);
console.log(fn3(42)); // Expected output: 42

// Additional test cases
const fn4 = compose([double, addOne]);
console.log(fn4(3)); // Expected output: 8 (3 + 1 = 4, 4 * 2 = 8)

const fn5 = compose([square, addOne]);
console.log(fn5(2)); // Expected output: 9 (2 + 1 = 3, 3 * 3 = 9)
