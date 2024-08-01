// Arrays
// JavaScript arrays are resizable and can contain a mix of different data types. (When those characteristics are undesirable, use typed arrays instead.)
// JavaScript arrays are not associative arrays 
// JavaScript arrays are zero-indexed
// JavaScript array-copy operations create shallow copies.
const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["Iron Man", "Thor"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr[1]);

// Arrat Method

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));


const newArr = myArr.join()

// console.log(myArr);
// console.log(typeof(newArr)); // Converted Into String 


/* Slice, Slice */

console.log("A ", myArr);

const myn1 = myArr.slice(1 , 3);
console.log(myn1);
console.log("B ", myArr);



const myn2 = myArr.splice(1 , 3);
console.log(myn2);
console.log("C", myArr);



