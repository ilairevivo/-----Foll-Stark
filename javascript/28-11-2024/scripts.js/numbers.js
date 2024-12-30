const num1 = "9";
const num2 = "3";

console.log(parseInt(num1) + Number(num2));// 12.2
console.log(parseFloat(num1) + Number(num2));// 12.4
console.log(num1 + num2);

console.log('***************** Math objact***************');

console.log(Math);

console.log(Math.floor(2.9)); // 2
console.log(Math.ceil(2.9)); // 3

console.log(Math.round(2.9)); // 3
console.log(Math.round(2.1)); // 2
console.log(Math.round(2.5)); // 3

console.log("**************** Random ********************");

console.log(Math.round(Math.random() * 100));

const round1 = Math.ceil(Math.random() * 10);
const round2 = Math.ceil(Math.random() * 10);

const total = round1 * round2;

console.log(`${round1} * ${round2} = ${total}`);

const operators = ["+", "-", "*", "/"];

const rendomindex = Math.floor(Math.random() * operators.length);

const operator = operators[rendomindex];

let result = 0;

if (operator === "+") {
    result = round1 + round2;
} else if (operator === "*") {
    result = round1 * round2;
} else if (operator === "/") {
    result = round1 / round2;
} else if (operator === "-") {
    result = round1 - round2;
}


console.log(`${round1} ${operator} ${round2} = ${result}`);

console.log(2.2223334334.toFixed(2));// 2.22


console.log('**************Excentes1****************');

const number1 = 5;
const number2 = 10;
const sum = number1 + number2;

const numbers = function () {
    console.log(`${number1} ${'+'} ${number2} ${'='} ${sum}`);
}

numbers()


console.log('**************Excentes2****************');

const round3 = Math.ceil(Math.random() * 10);
console.log(round3);


console.log('**************Excentes3****************');

const nambers2 = prompt('רישמו את אחת מהאפשרוית הבאות 10,100,1000');
let result2 = 1;

if (nambers2 === "10") {
    result2 = alert(Math.ceil(Math.random() * 10));
}
else if (nambers2 === "100") {
    result2 = alert(Math.ceil(Math.random() * 100));
}
else if (nambers2 === "1000") {
    result2 = alert(Math.ceil(Math.random() * 1000));
}else{
    alert('המספר לא מאה או עשר או אלף')
}


console.log('**************Excentes4****************');

const decimalNumber = 11.89787;
const decimalNoNumber = function () {
    console.log(Math.floor(decimalNumber));
}

decimalNoNumber()


console.log('**************Excentes5****************');

const namberMaam = prompt('רשום מחיר');
const cjanc = function(){
    const namberMaam2 = (namberMaam / 100) * 117;
    console.log(namberMaam2);
    console.log(namberMaam);
}
cjanc();



