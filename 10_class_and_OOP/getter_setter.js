class User{
    constructor(email, Password){
        this.email = email;
        this.Password = Password;
    }

    get email(){
        return this._email.toUpperCase()

    }
    set email(value){
        this._email = value
    }
    get Password(){
        return `${this._Password}tteyrdw`
    }
    set Password(value){
        this._Password = value.toUpperCase()
    }
}


const Ronie = new User("Ronie@gmail.com", "abc")

console.log(Ronie.Password);
console.log(Ronie.email);

