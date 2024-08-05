const usUserLoggedIn = true
const temperature = 50

if (temperature <= 50) {
    // console.log("less than 50");
    
}else{
    // console.log("Temperature is Greator than 50");

}


const score = 200

if (score > 100) {
    const power = "fly"
    console.log(`User power: ${power}`);
    
}





const balance = 1000

// if (balance > 500) console.log("test"); // implicit scope

if (balance < 500) {
    console.log("Less Than");
    
}else if (balance < 750){
    console.log("Less than 750");
    
}else if(balance < 900){
    console.log("Less than 900");
    
}else{
    console.log("less than 1200");
    
}

const usreLoggedIn = true
const debitCard = true
/**
 * Indicates whether the user is logged in from Google.
 * @type {boolean}
 */
const loggedInFromGoogle = true
const loggedInFromEmail = false

if (usreLoggedIn && debitCard) {
    console.log("Allow to Buy courses");
    
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("Allow to Buy courses");
    
}

