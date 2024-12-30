const arr1 = [1, 2, 3, 4.5, 6, 7, 8, 9, 10];
let arr2 = arr1;// deep copy
arr2[0] = 100;

console.log('arr1', arr1);
console.log('arr2', arr2);

console.log('******************** spraed Opertor ********************');

arr2 = [...arr1];// shallow copy
arr2[0] = 200;

console.log('arr1', arr1);
console.log('arr2', arr2);

console.log(...arr2);

console.log("********************* rest parameter *******************");

const sum = (opertor, ...args) => {
    let sum = 0;
    for (const arg of args) {
        if (opertor === "+") {
            sum += arg;
        } else if (opertor === "-") {
            sum -= arg;
        }
    }
    console.log("sum", sum);
}

sum("+", 100, 469, 250);

console.log("*********************** exercise 1*********************");
const card1 = [4, 30, 76, 100];
console.log(card1);
console.log(...card1);

console.log("*********************** exercise 2*********************");
let card2 = card1;
console.log("card1", card1);
console.log("card2", card2);

console.log("*********************** exercise 3*********************");
card1[0] = 50;
console.log("card1", card1);
console.log("card2", card2);

console.log("*********************** exercise 4*********************");
card2 = [...card1];
console.log("card1", card1);
console.log("card2", card2);

console.log("*********************** exercise 5*********************");
card1[3] = 200;
console.log("card1", card1);
console.log("card2", card2);

console.log("*********************** exercise 6*********************");
const person = {
    firstName: "Gal",
    lastName: "Lavi",
    email: "gal@gmail.com",
}

console.log("*********************** exercise 7*********************");
const personCopy = person;
console.log("person", person);
console.log("personCopy", personCopy);

console.log("*********************** exercise 8*********************");

personCopy.email = "kjckhckhc";
console.log(person);
console.log(personCopy);


console.log("*********************** exercise 9 *********************");
const newPerson = { ...person };
console.log("newPerson", newPerson);

console.log("*********************** exercise 10 *********************");
newPerson.firstName = "jony";
console.log("person", person);
console.log("newPerson", newPerson);

console.log("************************** value vs reference ********************");

const arrays = [
    [1, 2, 3],
    [4, 5, 6],
];

let word1 = "Hello";
let word2 = word1;
console.log(typeof word1); // string
console.log(typeof word2); // string

word2 = "word";

console.log(word1, word2);

console.log("*********************** exercise 1*********************");
const card3 = [4, 30, 76, 100];
const card4 = [80, 58, 93, 54];
let cards = [[card3], [card4]];
console.log(cards);

console.log("*********************** exercise 2*********************");
cards[1][0][0] = 200;
console.log(card4);
console.log(cards);

console.log("*********************** exercise 3*********************");
cards = [[...card3], [...card4]];
console.log(cards);

console.log("*********************** exercise 4*********************");
cards[1][0] = 300;
console.log(card4);
console.log(cards);

console.log("*********************** exercise 5*********************");
card3[1] = 1000;
console.log("card3:", card3);
console.log("cards:", cards);



console.log("*********************** try-catch *********************");
const num = 0;

try {
    num = 5;
    console.log("num", num);
} catch (error) {
    console.log("there was an error", error);
} finally {
    console.log("finally block");
    console.log(num + 1000);
}


console.log("*********************** Throw *********************");

const divide = (num1, num2) => {
    try {
    if (num2 === 0) {
        throw new Error("Cannot divide by zero");
    }
    return num1 / num2;
 } catch (error){
        alert(error.message);
        
    }

}
divide(10,0)
