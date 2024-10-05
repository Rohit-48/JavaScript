/**
 * Creates a counter function that increments the counter each time it is called.
 * @param {number} n - The initial value for the counter.
 * @returns {function} - A function that increments and returns the counter.
 */
function createCounter(n) {
    let counter = n - 1;
    return function() {
        counter = counter + 1;
        return counter;
    };
}

const counter = createCounter(10);
console.log(counter());
console.log(counter());
console.log(counter());



