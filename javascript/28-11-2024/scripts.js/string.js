const sentence = 'The quck bruwn fox jumps bruwn the lazi log';

console.log(sentence.length); // namber of sentence

console.log(sentence.toUpperCase); // all uppelcse

console.log(sentence.toLowerCase); // all lowrcase

console.log(sentence.indexOf('bruwn')); // index of th word 'bruwn'

console.log(sentence.lastIndexOf('bruwn')); // last index of th word 'bruwn'

console.log("slice: ", sentence.slice(4, 10)); // slice from index 4 to 10 // quick b

console.log(sentence);

console.log("substring: ", sentence.substring(4, 11)); // substring from index 4 to 10 // quick b


const name1 = "Gilad";
const name2 = "Israel";

// hello Gilad & Israel

//console.log("Hello " + x + " & " + y );

console.log(`Hello ${name1} & ${name2}`);// string literals


console.log(sentence.replace('quck', 'sluw'));// replace 'quick' 

console.log(sentence.replaceAll('bruwn', 'red')); // replace all 'bruwn' with 'red'

console.log('**************Excentes1****************');


const promptForFarsttName = prompt('(שיהיה גדול משני תווים)כתבו שם פרטי');
const promptForLestName = prompt('(שיהיה גדול משני תווים) כתבו שם משפחה');
const prompts = function () {
    if (promptForFarsttName.length < 2 && promptForLestName.length < 2) {
        alert(`גם ${promptForFarsttName} וגם ${promptForLestName} קטן משני תווים`);
        return;
    }
    if (promptForFarsttName.length < 2) {
        alert(" ❌ " + promptForFarsttName + ' קטן משני תווים');
    }
    if (promptForLestName.length < 2) {
        alert(" ❌ " + promptForLestName + ' קטן משני תווים');
    }


    if (promptForFarsttName.length > 2 && promptForLestName.length > 2) {
        alert('✅ ברוך הבא');
    }
}
prompts();

console.log('**************Excentes2****************');

const phoneNumber = prompt('אנא רשום מספר טלפון');

const validatePhoneNumber = function () {
    if (phoneNumber.length > 9 || phoneNumber.length > 10) {
        alert('ברוך הבא');
    } else {
        alert('שגיאה (רשמת פחות מעשר או תשע תווים)');
    }
}

validatePhoneNumber();

console.log('**************Excentes3****************');


const promptForEmail = prompt('רשום אימייל');

const prompt3 = function () {
    if (promptForEmail.endsWith("@gmail.com")) {
        alert("ברוך הבא!");
    } else {
        alert("האימייל אינו של Gmail.");
    }
}

prompt3();

console.log('**************Excentes4****************');

const promptForNam = prompt("רשמו שם בבקשה");

const validateForNam = function(){
    

        const splitForName = promptForNam.replaceAll(' ','');
        alert(splitForName);
    }

validateForNam()







