// const Meta = new Object ()   // Singleton Object
const metaUser = {   // Non-Singleton Object

id : "123",
me : "Elon",
loggedIn : false

}
// console.log(metaUser);


/**
 * Represents a regular user.
 * @typedef {Object} RegularUser
 * @property {string} email - The email address of the user.
 * @property {Object} fullName - The full name of the user.
 * @property {Object} fullName.userFullName - The user's full name.
 * @property {string} fullName.userFullName.FirstName - The first name of the user.
 * @property {string} fullName.userFullName.LastName - The last name of the user.
 */
const regularuser = {
    email: "sam@gmail.com",
    fullName : {
        userFullName:{
            FirstName: "Sam",
            LastName:"Altman"
        }
    }
}

// console.log(regularuser.fullName?.userFullName.FirstName);



    const object1 = {1: "A", 2: "B"}
const object2 = {3: "A", 4: "B"}
const object4 = {5: "A", 6: "B"}


// const object3 = Object.assign({}, object1, object2,object4)

const object3 = {...object1,...object2,...object4}

// console.log(object3);


const users = [
    {
        id:1,
        email: "e@gmail.com"
    
    }
]

// users[1].email




// console.log(metaUser);
// console.log(Object.keys(metaUser));  // Important 
// console.log(Object.values(metaUser)); // Important           
// console.log(Object.entries(metaUser));

// console.log(metaUser.hasOwnProperty('loggedIn'));


const course = {
    coursename: "JS in Hindi",
    price: 999,
    CourseInstructor: "Hitesh"
}

// course.CourseInstructor

const {CourseInstructor: instructor} = course

// console.log(CourseInstructor);
console.log(instructor);


{
    {}
    {}
    {}
}