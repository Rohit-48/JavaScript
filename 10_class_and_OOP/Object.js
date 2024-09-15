const { log } = require("console");
const { create } = require("domain");

function multipleBy5(num) {
    return num*5
}

multipleBy5.power = 2

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);


function createUser(username, score) {
    this.username = username;
    this.score  = score;
}

createUser.prototype.increment = function() {
    this.score++;
}
createUser.prototype.printMe = function() {
    console.log(`Price is ${this.score}`);
}

const chai =  new createUser("Chai", 25);
const tea = new createUser("Tea", 250);

chai.printMe();

