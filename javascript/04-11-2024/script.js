// const number1 = +prompt("please enter a number1");
// const number2 = +prompt("please enter a number2");

// number1 > number2 && console.log(number1 + " is digger tham " + number2);
// number1 < number2 && console.log(number1 + " is smaller tham " + number2);
// number1 === number2 && console.log(number1 + " is aqual to " + number2);
const uName = prompt("שלום מדבר נציג המלונית, מה השם בבקשה");
const days = +prompt("שלום" + " " + uName + " " + "כמה ימים תרצה להתארח אצלינו");
const pricePerDay = 100;
const priceOfBreakfast = 30;
let total = days * pricePerDay;

let roomType;

+alert(uName + " אתה רוצה להשאר " + days + "ימים ולכן תשלם רק  " + total + "$");

const breakfast = prompt("האם תרצה ארוחת בוקר בישביל" + days + " ימים? (כן/לא)");

if (breakfast === "כן") {
    //total = total + totalBreakfast;
    total += days * priceOfBreakfast;
    +alert(uName + " אתה רוצה להשאר בישביל" + days + "ימים ולכן הסכום הכולל הוא" + total + "$");


} else if (breakfast === "לא") {
    +alert("אתה לא רוצה ארוחת בוקר ");
}

















