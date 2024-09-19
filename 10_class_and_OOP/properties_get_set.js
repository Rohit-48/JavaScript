function User(email, Password){
    this._email = email;
    this._Password = Password;

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._Password.toUpperCase()
        },
        set: function(value){
            this._Password = value
        }
    })
}

const chai = new User("ronie.ai", "abc")
console.log(chai.email);
