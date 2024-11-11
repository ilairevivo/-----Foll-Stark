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



// const uName = prompt("?שלום מדבר אנדרואיד😊, מה השם בבקשה");
// const pipol = +prompt("יש לי שאלה " + " " + uName + " " + "?אתה מגיע לבד");

//  if (pipol == "לא"){
     
//    var  orech = +prompt(uName + " " + "?כמה אורחים תהיו");
 
// }

// const opzia = +prompt("האופציות שיש לי להציא לך הן: • אופציה1 - זוגי מפננק - עולה 200 $ לאדם • אופציה2 - זוגי מפנק - עולה 300 $ לאדם. באיזה אופציה תהיה מעוניין? [2/1]")
// const pricePerDay1 = 200;
// const pricePerDay2 = 300;
// const days = +prompt(uName + " ?כמה לילות אתה רוצה להשאר ");
// let roomType1 = pricePerDay1 * days;
// let roomType2 = pricePerDay2 * days;
// if (opzia === "1") {
//     +alert("אני מסכם: עד כה, עבור הלינה והשהות במלון למשך" + " " + days + " " + "לילות עבור" + " " + orech + " " + "אורחים בחדר" + "יעלה" + " " + roomType1 + " " + "$");
// }
// else if (opzia === "2") {
//     +alert("אני מסכם: עד כה, עבור הלינה והשהות במלון למשך" + " " + days + " " + "לילות עבור" + " " + orech + " " + "אורחים בחדר" + "יעלה" + " " + roomType2 + " " + "$");
// }



// const breakfast = +prompt("האם תרצה ארוחת בוקר בישביל" + days + " ימים? (כן/לא)");

// if (breakfast === "כן" && opzia === "1") {

//     +alert('סה"כ לתשלום:' + " " + pricePerDay1 * days + 30 * days);


// }
// if (breakfast === "כן" && opzia === "2") {

//     +alert('סה"כ לתשלום:' + " " + pricePerDay2 * days + 30 * days + " " + 'ש"ח');


// }



function hotelBooking() {
    let name = prompt("שלום מדבר אנדרואיד, מה השם בבקשה?");
    let alone = prompt("יש לי שאלה, אתה מגיע לבד? (כן/לא)");

    let guests = 1;
    if (alone === "לא") {
        guests = +prompt("כמה אורחים תהיו?");
    }

    let option = prompt("האופציות שיש לי להציע לך הן:\n• אופציה 1 - זוגי מפנק - עולה 200 ₪ לאדם\n• אופציה 2 - זוגי סוויטה - עולה 300 ₪ לאדם\nבאיזה אופציה תהיה מעוניין? (1/2)");

    let pricePerNight = option === "1" ? 200 : 300;
    let nights = +prompt("כמה לילות?");

    let totalCost = nights * pricePerNight * guests;
    let breakfastCost = 30;
    let totalWithBreakfast = totalCost + (breakfastCost * guests);

    alert(`אני מסכם:\nעד כה, עבור הלינה והשהות במלון למשך ${nights} לילות עבור ${guests} אורחים בחדר ${option === "1" ? "זוגי מפנק" : "זוגי סוויטה"} יעלה ${totalCost} ₪.`);

    let wantBreakfast = prompt("עלות ארוחת בוקר הינה 30 ₪, האם תרצה שנפנק אותך? (כן/לא)");
    if (wantBreakfast.toLowerCase() === "כן") {
        alert(`הסכום הכולל של כל מה שבחרת כולל ארוחת בוקר הוא ${totalWithBreakfast} ₪.`);
    } else {
        alert(`הסכום הכולל של כל מה שבחרת הוא ${totalCost} ₪.`);
    }
}

hotelBooking();



















