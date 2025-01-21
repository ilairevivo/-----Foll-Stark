class Person {
    firstName;
    LastName;
    age;
    city;
    constructor(firstName, LastName, age, city) {
        this.firstName = firstName;
        this.LastName = LastName;
        this.age = age;
        this.city = city;
    }
    print() {
        console.log(`first name: ${this.firstName}\nlast name: ${this.LastName}\nage: ${this.age}\ncity: ${this.city}`);

    }

    sayWelcome() {
        alert(`welcome ${this.firstName} ${this.LastName}`);
    }

    setName(firstName, LastName) {
        firstName = prompt("please enter your first name");
        LastName = prompt("please enter your last name");
        this.firstName = firstName;
        this.LastName = LastName;
    }
}

const p1 = new Person("gal", "lavi", 30, "tel-aviv");
p1.print();
// p1.setName();
// p1.sayWelcome();

class User extends Person {
    is_login;
    password;
    UserName;

    constructor(firstName, LastName, age, city, is_login, password, UserName) {
        super(firstName, LastName, age, city);
        this.is_login = is_login;
        this.password = password;
        this.UserName = UserName;
    }

    login(u, p) {
        u = prompt("please enter your user name");
        p = prompt("please enter your password");
        if (u === this.UserName && p === this.password) {
            this.is_login = true;
            alert(`welcome ${this.firstName} ${this.LastName}`);
        }
    }
    logout() {
        this.is_login = false;
    }
    setPassword(Pold, Pnew) {
        Pold = prompt("please enter your old password");
        if (Pold === this.password) {
            Pnew = prompt("please enter your new password");
            this.password = Pnew;
        } else {
            alert("i`m sorry your old password is wrong");
        }
    }
    
    
      print() {
       this.print = console.log(`${this.firstName} : ${this.is_login}`);
        
      }
}

const u1 = new User("gal", "lavi", 30, "tel-aviv", false, "123", "galLevi");
u1.print();





