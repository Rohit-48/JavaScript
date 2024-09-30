# LeetCode JavaScript Questions

## Question 1: 2629. Function Composition

Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

The function composition of an empty list of functions is the identity function f(x) = x.

You may assume each function in the array accepts one integer as input and returns one integer as output.

### Question Solution:
```javaScript
/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    
    return function(x) {
        return functions.reduceRight((acc, fn) => fn(acc), x);
        
    };
};

const fn = compose([x => x + 1, x => 2 * x])
fn(4) // 9
```
---


## Question 2: 2619. Array Prototype Last
Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.

You may assume the array is the output of JSON.parse.

### Question Solution 

```javaScript
/**
 * @return {null|boolean|number|string|Array|Object}
 */
if (!Array.prototype.last) {
    Array.prototype.last = function() {
        // Check if the array has any elements
        if (this.length > 0) {
            return this[this.length - 1];  // Return the last element
        } else {
            return -1;  // Return -1 if the array is empty
        }
    };
}

const arr = [null, {}, 3];
const nums = [];

// Calling last() on both arrays and logging the results
console.log(arr.last());   // Output: 3
console.log(nums.last());  // Output: -1
```