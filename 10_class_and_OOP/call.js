function SetUsername(username){
    // complex BD Calls
    this.username = username
}

function createUser(username, email, password) {
    SetUsername.call(this, username);

    this.email = email;
    this.password = password;

}

const chai = new createUser("Chai","Chai@fb.com ", "123")
console.log(chai);
