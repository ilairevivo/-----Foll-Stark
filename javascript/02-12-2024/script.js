
const car = {
    manafacturer: "toyota",
    model: "toyota",
    color: "red",
    year: 2023,
    "number-of-wheels": 4,
    drive: () => {
        console.log("car is moving");
    },

    stop: () => {
        console.log("car is stoped");

    },

    changeyear: function (year) {
        this.year = year;
    },

    changemodel: function (model) {
        console.log(this);
        this.model = model;
    },
};

console.log(typeof car); // typeof: object
console.log(car); // the object

console.log("model: ", car.model);//"model: cary" : 1
console.log("model:"), car['model'];//"model: cary": 2

console.log("number-ofwheels:", car["number-of-wheels"]);// number-of-wheels: 4

console.log("******************* Object methuds *********************");

car.drive();
car.stop();

console.log(car);

console.log("******************* Object this *********************");

car.changeyear(2024);
car.changemodel("camry");

console.log("******************* Object loop *********************");

for (let key in car) {
    console.log(key);// this will print the real key of the object
}

for (let key in car) {
    console.log(car[key]);// is not the real key
}

console.log("******************* Object-for-of *********************");

for (let props of Object.values(car)) {
    console.log(props);
}

console.log(Object.keys(car));
console.log(Object.values(car));


console.log("******************* Exercise1 *********************");

const user = {
    fullName: "gal lavi", // משתנה עבור השם המלא
    userName: "galLvai",
    paswoord: "gal123",
    isLogin: false,
    // מתודה שמדפיסה "שלום" + השם המלא
    greet: function () {
        alert("שלום " + this.fullName);
    },

    // מתודה שמבקשת שם מלא ומשנה את ה-fullName
    askFullName: function () {
        this.fullName = prompt("נא להזין שם מלא:");
    },

    paswoordsAndUserNwme: function () {
        paswoords = prompt("נא להזין סיסמה:");
        username = prompt("נא להזין שם משתמש");
        if (this.paswoord == paswoords || this.userName == username) {
            this.isLogin = true;
        }
    },
    newPassword: function () {
        oldPassword = prompt("אנה הזן סיסמה קודמת");
        newPasswords = prompt("אנה הזן סיסמה חדשה");
        if (this.paswoord == oldPassword) {
            this.paswoord = newPasswords;
            alert("הסיסמה שונתה בהצלחה")
        } else {
            alert("הסיסמה שגויה ");
        }
    },
    changeIsLogin: function () {
        this.isLogin = false;
    },

};
console.log(typeof user);
console.log(user);
user.greet();
user.askFullName();
user.greet();
user.paswoordsAndUserNwme();
console.log(user.isLogin);
user.newPassword();



console.log("***************** objrct - chaining methods *********************");

const charcter = {
    name: "john",
    level: 1,
    xp: 0,
    raiseXp: function (points) {
        this.xp += points;

        if (this.xp === 10) {
            this.level++;
            this.xp = 0;
        }
        return this;
    },
    print: function (what) {
        if (what === 'all') {
            console.log(this);
        } else if (what === 'level') {
            console.log("level up", this.level);

        }
        return this;
    }

}
charcter.raiseXp(10).print('level').print('all');

const arr = [1, 2, 3, 4, 5, 6, 7,];
const number = arr.filter((item) => item > 2)
    .map((item) => item * 2);
console.log('number is: ', number);



