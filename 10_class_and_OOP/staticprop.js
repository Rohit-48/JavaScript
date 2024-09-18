class User{
    constructor(username, ){
        this.username = username;
    }

    logMe(){
        console.log(`USERNAME: ${this.username}`);
    }

    static createID(){
        return `123`
    }
}

const rohit = new User("Rohit")
// console.log( rohit.createID());


class Teacher extends User {
    constructor(username ,email){
        super(username);
        this.email = email;
    }
}

const iphone = new Teacher("Iphone17", "i@phone17gmail.com")
iphone.logMe()
// console.log(iphone.createID());
