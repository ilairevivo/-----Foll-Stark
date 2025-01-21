class Person {
    static count = 0;
    firstName;
    lastName;
    age;
    email;
    #id;

    chengeEmail(newEmail) {
        this.email = newEmail;
    }

    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
        this.#id = ++Person.count;
    }

    static printCount() {
        console.log(`this is all person: ${Person.count}`);
    }
}

const moshe = new Person('moshe', 'levi', 22, 'moshe@.com');
const yossi = new Person('yossi', 'levi', 42, 'yossi@.com');
const gal = new Person('gal', 'levi', 28, 'gal@.com');
const levi = new Person('levi', 'levi', 32, 'levi@.com');
const newEmail = moshe.chengeEmail('moshe@.com');
console.log(newEmail);

Person.printCount();

console.log(moshe, yossi, gal, levi);

class User extends Person {
    password;
    constructor(firstName, lastName, age, email, password) {
        super(firstName, lastName, age, email);
        this.password = password;
    }
}

const user = new User('moshe', 'levi', 22, 'moshe@.com', '1234');
console.log(user);

console.log("*********************** exercise 1*********************");

class Animals {
    static name;
    static age ;
    static id = 0;
    static allAnimals = [];
    constructor(name, age, ) {
        this.name = name;
        this.age = age;
        this.id = ++Animals.id;
        Animals.allAnimals.push(this);
    }



   static printStatistics() {
        this.allAnimals.forEach(element => {
           return console.log(`name: ${element.name}\nage: ${element.age}\nid: ${element.id}`);
        });
    }
}

const dog = new Animals('dog', 22, );
const cat = new Animals('cat',34, );
const fish = new Animals('fish', 4);
console.log(`this is all animals: ${Animals.id}`);
console.log(dog, cat, fish);
Animals.printStatistics();