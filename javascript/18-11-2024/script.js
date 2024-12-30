console.log("***********************h.w****************\n");

const grades = [80, 85, 40, 100, 60];

function CalcSgrades() {
    const failed = [];
    const passed = [];
    const excellant = [];

    for (let grade of grades) {
        if (grade <= 69) {
            failed.push(grade);
        } else if (grade >= 70 && grade <= 90) {
            passed.push(grade);
        } else {
            excellant.push(grade);
        }
    }

    console.log(failed.length + `student faild`);
    console.log('passed:', passed.length);
    console.log('excelent', excellant.length);
}

//CalcSgrades();


console.log("***********************filter****************\n\n");

function filterSg() {
    const failed = grades.filter(function (someitem) {
        return someitem.length <= 69;
    });
    const passed = grades.filter(function (someitem) {
        return someitem >= 70 && someitem <= 90;
    });
    const excellant = grades.filter(function (someitem) {
        return someitem >= 90;
    });
    console.log(failed.length + `student faild`);
    console.log('passed:', passed.length);
    console.log('excelent', excellant.length);

}

filterSg()


console.log("***********************exercise****************\n\n");

const aninals = ['cat', 'dog', 'fish', 'bird', 'shark'];

const diggerS = aninals.filter(function (aninal) {
    return aninal.length > 3;
});

console.log(diggerS);

const arye = aninals.filter(function (item) {
    return item[0] === 'd';
});
console.log(arye);

console.log('******************* foreach ******************\n\n');

const countries = ['israel', 'usa', 'france', 'ytali', 'spain']

// for (let cantry of countries){
//     console.log(cantry);
// }

countries.forEach((item, i,) => {
    console.log(i + " - " + item);
});

console.log('******************* map ******************\n\n');

const numbers = [1, 2, 3, 4, 5];

// const numbers2 = [];

// numbers.forEach(num => {
//     numbers2.push(num * 100);

// })

const number2 = numbers.map((num) => {
    return num * 100;
});
console.log(number2);

console.log('****************** Exercise map 1*****************\n\n');

const number3 = numbers.map((num) => {
    return num * 10;
});
console.log(number3);

console.log('****************** Exercise map 2*****************\n\n');

const numbers4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const number4 = numbers4.map((nam) => {
//     if (nam % 2) {
//     } else {
//         return nam * 100
//     }
// });
// console.log(number4);
const number4 = numbers4.filter((num) => num % 2 === 0).map((num) => {
    return num * 100
})
console.log(number4);

console.log('****************** Exercise map 3*****************\n\n');

const countries1 = ['yeroshalem', 'london', 'paris', 'roma', 'tukyo'];
const countries2 = ['israel', 'usa', 'france', 'ytali', 'spain'];

const cantrys = countries2.map((item, index) => item + " - " + countries1[item, index]);

console.log(cantrys);


console.log('***************** reduce **************\n\n');
const ages = [31, 44, 45, 42, 39, 37, 26, 21];


const sum = ages.reduce((acc, item) => {
    return acc + item;
}, 0);


console.log('ages average in our humble class is: ' + sum / ages.length);


console.log('********************height***************');

const heights = [100, 170, 160, 200, 150, 140];

const height = heights.reduce((acc, item) => {
    if (acc < item) {
        return item
    }else{
        return acc
    }
}, 0);

console.log('the hight student our humble class is: ' + height);

console.log('***************** Exerice ***************');
const height2 = heights.reduce((acc, item) => {
    if (acc > item) {
        return item
    } else {
        return acc
    }
}, 0);
console.log(height2);





