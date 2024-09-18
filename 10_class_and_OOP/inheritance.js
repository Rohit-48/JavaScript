
class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`USERNAME IS ${this.username}`);
        
    }
}

class Teacher extends User {
    constructor(username, email, password){
        super(username)
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A New Course was Added by ${this.username}`);
        
    }
}

const chai = new Teacher("chai", "Chai@gmail.com", "6567")

chai.addCourse()

const MasalaChai = new User("MasalaChai")

MasalaChai.logMe()


console.log(chai instanceof User);

