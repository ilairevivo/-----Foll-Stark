//string;
console.log("Hola from Javascript-File 1");



//number;
console.log(6 + 6) // 12
console.log("6" + "6") // "66"
console.log("6" + 6 + 6) // "666"

// + - * /

console.log("**********************")
//משתנה
var mynumber = 50;

console.log(mynumber + 50) // 100
console.log(mynumber) // 50

mynumber = mynumber + 50;
console.log(mynumber); // 100

mynumber += 50;

//boolean: true, false
console.log(mynumber == 50); //false
console.log(mynumber == 150); //true
console.log(mynumber == "150"); //true
console.log(mynumber === "150"); //false

console.log("*********************************");
console.log(true == 1); // true
console.log(true === 1); // false

console.log(9 % 2); // 1 (9 / 2 = נשאר 1)
console.log(7 / 4); // 1.75
console.log(7 % 4); // 3 (7 % 4 = נשאר 3)

console.log(4 % 2 == 0); // true


console.log("*********************************");

var myNumber2 = 10;

//method 1
myNumber2 = myNumber2 + 1;

//method 2
myNumber2 += 1;

//method 3
myNumber2++;


console.log("*********************************");
console.log(10 * 10 === 100);
console.log(3 * 3 !== 9);



console.log("*********************************");
console.log(3 > 2); //true
console.log(3 < 2); //false


console.log(3 >= 2); //true

console.log("*********************************");

var isOK = 10;
console.log(isOK == "10");
console.log(isOK != "10");

var isOK = 10;
console.log(isOK === "10");
console.log(isOK !== "10");

console.log("*********************************");
console.log(3 > 2 && 4 > 3)// true
console.log(3 > 2 && 10 < 4)//false

console.log(3 > 2 || 4 < 3)// true
console.log(3 < 2 || 10 < 4)//false

console.log("*****************************");

var string = "joni";
var number = 10;
var number2 = 10.5;
console.log(typeof string);
console.log(typeof number);
console.log(typeof number2);


