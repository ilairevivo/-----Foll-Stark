console.log("**********************for loop on aray**********************\n\n");

const fuites = ["banana", "mekon", "Apple", "mango", "chrey", "orenge"];

for (let i = 0; i < fuites.length; i++) {
    console.log((i + 1) + ".ftuit is: " + fuites[i]);

}

console.log("\n\n**********************for of loop on aray*********************\n\n");

const cars = ['bmw', 'audi', 'marcedes', 'toyota', 'honda', 'sozuki'];

for (let car of cars) {
    const i = cars.indexOf(car);
    console.log("car is: " + car);
}

console.log("\n\n**********************for-in loop on object*********************\n\n");

for (let i in cars) {
    let number = i;

    if (number !== cars.length - 1) {
        number++;
    }
    console.log(number + "car is: " + cars[i]);
}


console.log("\n\n***********************break-continur********************\n\n");
const number = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

for (let i in number) {
    // if (i > number.length - 3) {
    //        break;
    // }
    if (number[i] === 500 || number[i] === 600) {
        continue;
    }

    console.log("number is: " + menubar[i]);

}

console.log("\n\n**********************split - join*********************\n\n");

const test = "i am a web developer";

const words = test.split(" ");
console.log(words);

const bmw = "bmw";
const bmwArray = bmw.split("");
bmwArray[0] = bmwArray[0].toUpperCase();
console.log(bmwArray);

// const newtext = bmwArray[0] + bmwArray[1] + bmwArray[2];
const newtext = bmwArray.join("-");
console.log(newtext);

console.log();


console.log("\n\n**********************index1*********************\n\n");


const palys = ["joni", "maycel", "levi", "israel", "lory"];

for (let i of palys) {
    let star = i.split("");
    star[0] = star[0].toUpperCase();
    // console.log(star);
    const newtext1 = star.join("");
    console.log(newtext1);

}

for (let i in palys) {
    let star = palys[i].split("");
    star[0] = star[0].toUpperCase();
    palys[i] = star.join("");
}

console.log(palys);

console.log("\n\n**********************filter*********************\n\n");

// const number2 = [1, 2, 3, 4, 5, 7, 6, 8, 9, 10];

// const numberNo5 = number2.filter(function (item, i) {
//     console.log("i: " + i + " item: " + item);
//     return item !== 5;
// });

// const oddNumber = number2.filter(function(item){
// return item % 2 !== 0;
// })

// console.log(oddNumber);


console.log("\n\n**********************exent2*********************\n\n");
const number3 = [1, 2, 3, 4, 5, 7, 6, 8, 9, 10];

const oddNumber = number3.filter(function (item) {
    return item % 2 === 0;
});

for (let i in oddNumber) {
    oddNumber[i] *= 100;

}
console.log(oddNumber);
