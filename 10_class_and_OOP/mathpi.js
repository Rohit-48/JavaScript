const { Writable } = require("stream");

const Descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(Descriptor);

const chai = {
    name: 'Lemon tea',
    price: 250,
    isAvailable: true,

    orderChai: function () {
        console.log("Code Faat Gaya Hai");
        
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name", {
    // writable: false,
    enumerable: false,
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));


for  (let [key, value] of Object.entries(chai)) {
    if(typeof value != 'function'){
        console.log(`${key} : ${value}`);

    }
}