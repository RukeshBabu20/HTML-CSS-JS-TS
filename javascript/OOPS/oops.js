
// 1. property
// 2. method

// OBJECT
const car = {
    brand: 'Toyota',
    start: function(){
        return 'Car started';
    }
}
console.log(car.brand)
console.log(car.start());

//CLASSES

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log(`Hello! this is ${this.name}, my age is ${this.age}`)
    }
}
const username = new Person('john', 20)
username.greet();


//______________________________________________________

//INHERITANCE

class Animal{
    speak(){
        console.log('Animal make sound!!')
    }
}

class Dog extends Animal {
    speak(){
        console.log('Dog barks!!!')
    }
}

const dog = new Dog();
dog.speak();

//________________________________________________

// ENCAPSULATION

class BankAccount {
    #balance = 0;

    deposit(amount){
        this.#balance += amount
    }

    getBalance(){
        return this.#balance;
    }
}

const account = new BankAccount();
account.deposit(1000);
console.log(account.getBalance())

//_________________________________________

// POLYMORPHISM

class Shape {
    draw(){
        console.log('Drawing a Shape');
    }
}

class Circle extends Shape {
    draw(){
        console.log('Drawing a Circle');
    }
}

const shape = new Shape();
const circle = new Circle();

console.log(shape.draw());
console.log(circle.draw());

//_______________________________________________________
