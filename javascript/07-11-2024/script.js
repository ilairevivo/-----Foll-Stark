// const dey = +prompt("pleasa enter the dey (number):");

// switch (dey) {
//     case 1:
//         console.log("ראשון");
//         break;
//     case 2:
//         console.log("שני");
//         break;
//     case 3: case 4:
//         console.log("הימים האלה תפוסים אנה בחר יום אחר בשבוע");
//         break;
//     case 5:
//         console.log("חמישי");
//         break;
//     case 6: case 7:
//         console.log("הימים האלה תפוסים אנה בחר יום אחר בשבוע");
//         break;
//     default:
//         console.log("אנה בחר מספר אשר מייצג יום בשבוע (עד שבע)")
//         break
// }

// const Uname = prompt("מה השם בבקשה");
// const guests = +prompt(`שלום ${Uname} כמה אורחים תהיו?`);
// let totalPrice = 0;
// let price = 0;
// switch (guests) {
//     case 1: case 2:
//         price = 200;
//         totalPrice = guests * price;
//         alert(`room for 2  total price is  ${totalPrice} $`)
//         break;
//     case 3: case 4: case 5:
//         price = 100;
//         totalPrice = guests * price;
//         alert(`romm for 5  total price is  ${totalPrice} $`)
//         break;
//     case 6: case 7: case 8: case 9: case 10: case 11: case 12: case 13: case 14: case 15:
//         alert(`romm for 15  total price is  ${totalPrice} $`)
//         break;
// }

// let nights = +prompt("pleasa enter the number of nights:");
// alert("You will stay for " + nights + "nights and the total price is " + nights * totalPrice + "$");

// const breakfast = prompt("האם תרצה שנפנק אותך בארוחת בוקר כל יום? no/yes ");

// switch (breakfast) {
//     case "yes":
//         totalPrice += nights * 30;
//         alert("המחיר הכולל שלך בשביל " + nights + " לילות הוא " + totalPrice + "$");
//         break;
//     case "no":
//         alert("המחיר הכולל ששלך ללא ארוחת בוקר הוא " + totalPrice + "$");
//         break;
//     default:
//         alert("אנחנו לוקחים את האפשרות  לא כבחירה והסכום הכולל שלך בוא " + totalPrice + "$");
//         break;
// }

// const Uname = prompt("מה השם בבקשה");
// const guests = +prompt(`שלום ${Uname} כמה אורחים תהיו?`);
// const opzia = +prompt("האופציות שיש לי להציע לך הן:\n•אןפציה 3 חדר סופר מפנק 400$\n  חדר מדיום 1 - זוגי מפנק - עולה 200 ₪ לאדם\n• חדר לרג` - זוגי סוויטה - עולה 300 ₪ לאדם\nבאיזה אופציה תהיה מעוניין? (1/2/3)")
// let totalPrice = 0;
// let price = 0;
// switch (opzia) {
//     case 1: 
//         price = 200;
//         totalPrice = guests * price;
//         alert(`room for 2  total price is  ${totalPrice} $`)
//         break;
//     case 2: 
//         price = 300;
//         totalPrice = guests * price;
//         alert(`romm for 5  total price is  ${totalPrice} $`)
//         break
//     case 3:
//         price = 400;
//         totalPrice = guests * price;
//         alert(`romm for 5  total price is  ${totalPrice} $`)
//         break
    
// }

let nights = +prompt("pleasa enter the number of nights:");
alert("You will stay for " + nights + "nights and the total price is " + nights * totalPrice + "$");

const breakfast = prompt("האם תרצה שנפנק אותך בארוחת בוקר כל יום? no/yes ");

switch (breakfast) {
    case "yes":
        totalPrice += nights * 30;
        alert("המחיר הכולל שלך בשביל " + nights + " לילות הוא " + totalPrice + "$");
        break;
    case "no":
        alert("המחיר הכולל ששלך ללא ארוחת בוקר הוא " + totalPrice + "$");
        break;
    default:
        alert("אנחנו לוקחים את האפשרות  לא כבחירה והסכום הכולל שלך בוא " + totalPrice + "$");
        break;
}