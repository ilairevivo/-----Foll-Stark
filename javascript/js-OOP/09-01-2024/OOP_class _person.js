class Person {
    first = 'ilai'
    last = 'revivo'
    age = 17
};

const P1 = new Person();
console.log(typeof P1);
console.log(`first name:${P1.first}\n last name: ${P1.last}\n age ${P1.age}`);

P1.first = 'Gal';
P1.last = 'Lavi';
console.log(`first name:${P1.first}\n last name: ${P1.last}`);

const P2 = new Person();
console.log(`first name:${P2.first}\n last name: ${P2.last} \n age ${P2.age}`);

P2.first = 'Avi';
P2.last = 'Cohen';
P2.age = 20;
console.log(`first name:${P2.first}\n last name: ${P2.last} \n age ${P2.age}`);

const P3 = new Person();
P3.first = 'Yossi';
P3.last = 'levi';
P3.age = 18;
console.log(`first name:${P3.first}\n last name: ${P3.last} \n age ${P3.age}`);

console.log("******************** exercise 2********************");

class BasicUser {
    first;
    last;
    userName;
    password;
    is_login;

    constructor(password, userName, last, first, is_login) {
        this.password = password;
        this.userName = userName;
        this.last = last;
        this.first = first;
        this.is_login = is_login;
    }
    sayWelcome() {
        console.log(`welcome ${this.first} ${this.last}`);
    }

    changeName(first, last) {
        first = prompt('what is your first name');
        last = prompt('what is your last name');
        this.first = first;
        this.last = last;
    }
    login(u, p) {
        u = prompt('please enter your user name');
        p = prompt('please enter your password');
        if (u === this.userName && p === this.password) {
            this.is_login = true;
        }
    }

    logout() {
        this.is_login = false;
    }
     
    changePassword(Pold, Pnew) {
        Pold = prompt('please enter your old password');
        if(Pold === this.password){
            Pnew = prompt('please enter your new password');
            this.password = Pnew;
        }else{
            alert('i`m sorry your old password is wrong');
        }

    }
}

const p1 = new BasicUser('gal123', 'galLevi', 'lavi', 'gal', false);
// p1.changeName();
// p1.sayWelcome();
// p1.login();
p1.logout();
p1.changePassword();
console.log(p1);
