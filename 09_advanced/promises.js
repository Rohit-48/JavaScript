const { error } = require("console");
const { json } = require("stream/consumers");

const promiseOne = new Promise(function (resolve, reject) {
    // Do an Async task 
    // DB calls, Cryptography
    setTimeout(function () {
        console.log('Async Task is Complete');
        resolve();
    }, 1000);
});

promiseOne.then(function () {
    console.log("Promise Consumed");
});

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async Task 2");
        resolve();
    }, 1000);
}).then(function () {
    console.log("Async 2 Resolved");
});

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "Rohit", email: "try.rohitmandavkar47@gmail.com" });
    }, 1000);
});

promiseThree.then(function (user) {
    console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false;
        if (!error) {
            resolve({ username: "Rony", password: "1234" });
        } else {
            reject('ERROR: Something Went Wrong');
        }
    }, 1000);
});

promiseFour.then((user) => {
    console.log(user);
    return user.username;
}).then((username) => {
    console.log(username);
}).catch((error) => {
    console.log(error);
}).finally(()=> console.log("The Promise is either resolve or Rejected ")
)


const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "JavaScript", password: "79665" });
        } else {
            reject('ERROR: JS Went Wrong');
        }
    }, 1000);
    
})

async function consumePromiseFive() {
    try {
        const respone = await promiseFive
    console.log(respone);
    } catch (error) {
        console.log(error);
        
    }
    
}

consumePromiseFive()



// async function getAllUsers() {
//     try {
//          const response = await fetch('https://jsonplaceholder.typicode.com/users');
//          const data = await response.json();
//          console.log(data);
//     } catch (error) {
//          console.log("E: ", error);
//     }
// }

// getAllUsers();

fetch('https://api.github.com/users/Rohit-48')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
    
})
.catch((error)=> console.log(error))
