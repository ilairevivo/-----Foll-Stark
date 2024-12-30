const sayThankYou = () => {
    console.log('thank you ');

}

const sayThankYouBigSpender = () => {
    console.log('thank you big spender');

}
const calcSum = (price1, price2, myFunction) => {
    const finalPrice = price1 + price2;
    console.log(`the total price is ${finalPrice}`);
    myFunction();
}
const start = () => {
    const num1 = prompt('enter a number');
    const num2 = prompt('enter a number');
    if (num1 + num2 > 2000) {
        calcSum(num1, num2, () => {
            console.log('thank you big big spender');
        });
    } else if (num1 + num2 > 1000) {
        calcSum(num1, num2, sayThankYouBigSpender);
    }
    else {
        calcSum(num1, num2, sayThankYou);
    }
}


console.log('***************** excercise *********************');
const calc = (num1, num2, calcFunc) => {
    calcFunc();
}
const go = () => {
    const num1 = prompt('enter a number 1');
    const num2 = prompt('enter a number 2');
    const operator = prompt('enter an operator');
    if (operator === '+') {
        calc(num1, num2, () => {
            alert(`${num1} + ${num2} = ${num1 + num2}`);
        });
    } else if (operator === '-') {
        calc(num1, num2, () => {
            alert(` ${num1} - ${num2} = ${num1 - num2}`);
        });
    } else if (operator === '*') {
        calc(num1, num2, () => {
            alert(`${num1} * ${num2} = ${num1 * num2}`);
        });
    } else if (operator === '/') {
        calc(num1, num2, () => {
            alert(` ${num1} / ${num2} = ${num1 / num2}`);
        });
    }
}
go();