// const { prototype } = require("events");

// let myName = "Rohit     "
// let mychannel = "Chai       "

// console.log(myName.truelength);


let myHeros = ["thor", "Loki"]

let heroPower = {
    thor: "Hammer",
    Loki: "Mischief",

    getLokiPower: function () {
        console.log(`Loki Power is ${this.Loki}`);
        
    }

}

Object.prototype.Rohit = function (){
    console.log(`Rohit is Persent in all Objects`);
    
}

Array.prototype.HeyRohit = function(){
    console.log(`Rohit Say Hello`);
    
}   
// myHeros.Rohit()
// myHeros.HeyRohit()
// heroPower.HeyRohit()


// Inheritance

const User = {
    name: "Rony",
    email: "Ronygoogle.com"
}

const Teacher = {
    makeVideo: true,
}
const TeachingSupport = {
    isAvailable: false,
}
const TAsupport = {
    makeAssigement: "Js Assignment",
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User;


// modern Syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUserName = "Radhi     ";

String.prototype.truelength = function(){
    console.log(`${this}`);
    console.log(`True Length Is: ${this.trim().length}`);
    
    
}

anotherUserName.truelength()
"Rohit".truelength()
"Tea".truelength()