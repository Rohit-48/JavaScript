function sayMyName () {
    console.log("R");
    console.log("O");
    console.log("H");
    console.log("I");
    console.log("T");

    
}

// sayMyName()

function addTwooNumbers (num1, num2){
    // let result = num1 + num2;
    // return result;
    return num1 + num2
   
}

const result = addTwooNumbers(3, 3)
// console.log("Result: ",result);


function userLoginMessage(username) {
    if (!username ) {
        console.log("Please Enter Your Name:");
        return
    }
    return `${username}, Just Logged In.`
    
}

// console.log(userLoginMessage("Rohit"))
console.log(userLoginMessage())
