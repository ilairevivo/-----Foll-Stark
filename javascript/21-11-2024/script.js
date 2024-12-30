const sec1 = () => {
    setTimeout(() => { alert('hello word') }, 1000);
    console.log('i am first');
}

const printhllo = () => {
    alert('hello class');
}

const sec2 = () => {
    setTimeout(printhllo, 2000);
}


console.log('************Exercise***********');



const sec3 = () => {
    const userInput = +prompt("נא הכנס מספר:");
   

    if (userInput > 10) {
        setTimeout(() => {
            console.log(userInput);
        }, 1000);
    } else {
        setTimeout(() => {
            alert(userInput);
        }, 10000);
    }
    return userInput
}

sec3();




