Here's a cleaned-up version of your markdown document:

# JavaScript and Classes

## Object-Oriented Programming (OOP)

### What is an Object?
- An **object** is a collection of properties and methods.
- Example: The `toLowerCase()` method in JavaScript can be used on a string object.

### Why Use OOP?
OOP is a programming paradigm that allows you to structure code using objects, making it easier to manage, reuse, and extend.

### Parts of OOP in JavaScript:
- **Object Literals**: The simplest way to create an object using key-value pairs.
- **Constructor Functions**: Functions that initialize new objects.
- **Prototype**: A mechanism through which JavaScript objects inherit properties and methods.
- **Classes**: A blueprint for creating objects with specific properties and methods.
- **Instances**: Objects created using the `new` keyword and constructors (e.g., `new ClassName()`).

## 4 Pillars of OOP
- **Abstraction**
- **Encapsulation**
- **Inheritance**
- **Polymorphism**

---

### Abstraction
**Abstraction** is about simplifying complex systems by breaking them into smaller, manageable parts. It hides unnecessary details, showing only what’s relevant to the user.

#### Example:
```javascript
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  // Abstraction: You can drive the car without knowing how the engine works.
  drive() {
    console.log(`${this.make} ${this.model} is driving.`);
  }
}

const myCar = new Car('Tesla', 'Model 3');
myCar.drive(); // Output: Tesla Model 3 is driving.
```

In this example, you interact with the `drive()` method without needing to know how it works internally.

---

### Encapsulation
**Encapsulation** is the practice of bundling the data (properties) and methods (functions) inside a class while keeping some of them private or inaccessible from the outside.

#### Example:
```javascript
class BankAccount {
  constructor(balance) {
    let _balance = balance; // Private variable
  
    this.deposit = function(amount) {
      if (amount > 0) _balance += amount;
    };

    this.getBalance = function() {
      return _balance;
    };
  }
}

const myAccount = new BankAccount(1000);
myAccount.deposit(500);
console.log(myAccount.getBalance()); // Output: 1500
console.log(myAccount._balance); // Output: undefined (private)
```

Here, the `_balance` property is encapsulated and can't be directly accessed outside the class.

---

### Inheritance
**Inheritance** allows one class to inherit the properties and methods of another, promoting code reuse.

#### Example:
```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog('Rex');
dog.speak(); // Output: Rex barks.
```

In this example, the `Dog` class inherits from the `Animal` class and overrides the `speak()` method.

---

### Polymorphism
**Polymorphism** refers to the ability of different classes to be treated as instances of the same class through a common interface. It allows methods to behave differently based on the object that calls them.

#### Example:
```javascript
class Shape {
  draw() {
    console.log('Drawing a shape.');
  }
}

class Circle extends Shape {
  draw() {
    console.log('Drawing a circle.');
  }
}

class Square extends Shape {
  draw() {
    console.log('Drawing a square.');
  }
}

const shapes = [new Circle(), new Square()];

shapes.forEach(shape => {
  shape.draw();
});
// Output: 
// Drawing a circle.
// Drawing a square.
```

In this example, `draw()` behaves differently depending on whether it’s called by a `Circle` or a `Square`.

---

### Summary:
- **Abstraction**: Hiding unnecessary complexity and showing only the relevant details.
- **Encapsulation**: Keeping data and methods safe from outside interference.
- **Inheritance**: A way for one class to take on the properties and methods of another class.
- **Polymorphism**: Allowing a single method to behave differently based on the object calling it.

These principles help create modular, maintainable, and scalable software designs.