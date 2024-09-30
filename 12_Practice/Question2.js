//Question2 :2619. Array Prototype Last

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
















//****************************************Self Study ****************************************/


// What is Array.last() method?
// if (!Array.prototype.last) {
//     Array.prototype.last = function() {
//         console.log(this);
        
//         return this[this.length - 1];
//     };
// }

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.last());  // Output: 5


// What is 