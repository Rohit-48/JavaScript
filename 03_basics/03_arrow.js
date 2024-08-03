const user = {
    username: "Rohit",
    Price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to Website`);
        console.log(this);
        
        
    }
}


// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()


// console.log(this);


// function Chai() {
//     console.log(this.username);
    
// }
// Chai()



const chai = ()=>{
    let username = "Rohit"
    console.log(this.username);
    
}


// chai()


// const addOne = (num1, num2) => num1 + num2;   // Implicit Line Return
// const addTwo = (num1, num2) => (num1 + num2);   // Implicit Line Return, Most important for React.js

const addThree = (num1, num2) => ({username: "Rohit"})

// console.log(addOne(4, 3));
console.log(addThree(4, 3));

