// singleton 
// Objects literals
//Object.create ........AfterWards

const mysym = Symbol("Key1")

const JsUser = {
    name: "Rohit",
    Age: 19,
    [mysym]: "MyKey1", // The Syntax to Act A Symbol In Key
    "Full Name": "Rohit Mandavkar",
    Location: "Chiplun",
    Email: "rohitopenai.com",
    isLoggedIn: false,
    lastLoginDay: ["Monday", "Saturday"]
}

// console.log(JsUser.Email); // Not Effect Way To Print.  
// console.log(JsUser["Email"]); 
// console.log(JsUser["Full Name"]);
// console.log(JsUser[mysym]);


JsUser.Email = "rohit@appple.com"
// Object.freeze(JsUser)
JsUser.Email = "rohit@Antropic.com"
// console.log(JsUser);


JsUser.greeting = function (){
    console.log("Hello JavaScript");
    
}

JsUser.greetingtwo = function (){
    console.log(`Hello JavaScript ${this.name}`);
    
}

// console.log(JsUser.greeting());
// console.log(JsUser.greetingtwo());

