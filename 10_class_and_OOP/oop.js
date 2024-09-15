const user = {
  username: "Rohit",
  loginCount: 8,
  SignIn: true,

  getUserDetails: function(){
    // console.log("Got User Details for DB");
    
  }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
    // implicitly define 

  this.greeting = ()=>{
    console.log(`Welcome${this.username}`);
    
  }
  return this 
}

const userOne = new User("Rohit", 5, 7)
const userTwo = new User("Chai", 8, true) 

console.log(userOne.constructor);
// console.log(userTwo);



