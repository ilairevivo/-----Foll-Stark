// const number1 = +prompt("please enter a number1");
// const number2 = +prompt("please enter a number2");

// number1 > number2 && console.log(number1 + " is digger tham " + number2);
// number1 < number2 && console.log(number1 + " is smaller tham " + number2);
// number1 === number2 && console.log(number1 + " is aqual to " + number2);
// const uName = prompt("שלום מדבר נציג המלונית, מה השם בבקשה");
// const days = +prompt("שלום" + " " + uName + " " + "כמה ימים תרצה להתארח אצלינו");
// const pricePerDay = 100;
// const priceOfBreakfast = 30;
// let total = days * pricePerDay;

// let roomType;

// +alert(uName + " אתה רוצה להשאר " + days + "ימים ולכן תשלם רק  " + total + "$");

// const breakfast = prompt("האם תרצה ארוחת בוקר בישביל" + days + " ימים? (כן/לא)");

// if (breakfast === "כן") {
//     //total = total + totalBreakfast;
//     total += days * priceOfBreakfast;
//     +alert(uName + " אתה רוצה להשאר בישביל" + days + "ימים ולכן הסכום הכולל הוא" + total + "$");


// } else if (breakfast === "לא") {
//     +alert("אתה לא רוצה ארוחת בוקר ");
// }



const uName = prompt("?שלום מדבר אנדרואיד😊, מה השם בבקשה");
const pipol = +prompt("יש לי שאלה " + " " + uName + " " + "?אתה מגיע לבד");




if (pipol === "לא") {

    const orech = +prompt(uName + " " + "?כמה אורחים תהיו");

}
const opzia = +prompt("האופציות שיש לי להציא לך הן: • אופציה1 - זוגי מפננק - עולה 200 $ לאדם • אופציה2 - זוגי מפנק - עולה 300 $ לאדם. באיזה אופציה תהיה מעוניין? [2/1]")
const pricePerDay1 = 200;
const pricePerDay2 = 300;
const nain = +prompt(uName + " ?כמה לילות אתה רוצה להשאר ");
let roomType1 = pricePerDay1 * nain;
let roomType2 = pricePerDay2 * nain;
if (opzia === "1") {
    +alert("אני מסכם: עד כה, עבור הלינה והשהות במלון למשך" + " " + nain + " " + "לילות עבור" + " " + orech + " " + "אורחים בחדר" + "יעלה" + " " + roomType1 + " " + "$");
}
else if (opzia === "2") {
    +alert("אני מסכם: עד כה, עבור הלינה והשהות במלון למשך" + " " + nain + " " + "לילות עבור" + " " + orech + " " + "אורחים בחדר" + "יעלה" + " " + roomType2 + " " + "$");
}



const breakfast = +prompt("האם תרצה ארוחת בוקר בישביל" + nain + " ימים? (כן/לא)");

if (breakfast === "כן" && opzia === "1") {

    +alert('סה"כ לתשלום:' + " " + pricePerDay1 * nain + 30 * nain);


}
if (breakfast === "כן" && opzia === "2") {

    +alert('סה"כ לתשלום:' + " " + pricePerDay2 * nain + 30 * nain + " " + 'ש"ח');


}
else if (breakfast === "לא") {
    +alert("חבל ...");
}

















