// console.log("***********************************");


// const numberofwords = +prompt("please enter number of words");
// let setence = "";
// for (let i = 1; i<= numberofwords; i++){
//     const word = prompt(`please enter word number  ${i}:`);
//     setence += word + " ";

// }
// alert(setence);

// console.log("***********************************");

// let board = "";

// for (let i=1; i<=10; i++){
//     for (let j=1; j<=10; j++){
//         board += i*j + "    ";
//     }
//     board += "\n"
// }

// alert(board);


const fuites = ["banana" ,"mekon","Apple","mango"];
console.log(fuites[0]);
fuites[0]="orange";

console.log(fuites);
console.log(fuites.length);
console.log(typeof fuites);




fuites[5] = "maipel";
console.log(fuites);

console.log(fuites[fuites.length - 1]);
console.log(fuites[0]);

//היא מתודה דיסטרקטיבית אשר מסירה את האינדקס האחרון מהמערך 
console.log(`**********************pop*********************`);
fuites.pop();
console.log(fuites);

//מוסיף עוד ערך\פריט לתחילת המערך
console.log(`**********************unshift*********************`);
fuites.unshift("kiwi");
console.log(fuites);


//מתודה הזאת תסיר את האינדקס הראשון מהמערך
console.log(`**********************shift*********************`);
const shifd = fuites.shift();
console.log("shifed ", shifd);
console.log(fuites);


// (נכנס לסוף המערך) מוסיף עוד פריט למערך
console.log(`**********************push*********************`);
fuites.push("gtapes");
console.log(fuites);


console.log("*******************demo***************");
const pipol =["יונתן" ,"שמעון", "אודל" ,"רותם" ,"ישראל" ,"ג`וני"];
console.log(pipol);
console.log(typeof pipol);
console.log(pipol.length);

const x = pipol[3];
console.log(x);

const y = (pipol[4]+pipol[5]);
console.log(y);

pipol[3] = "לוי";
console.log(pipol);
let z = 'גבריאל'
let z2 = 'כהן'
pipol[5] = z;
pipol[4] = z2;
console.log(pipol);

pipol.push("תפארת");
console.log(pipol);


pipol.splice(1, 1); 
console.log(pipol); 

for (let i = 0; i<pipol.length; i++){
    console.log(pipol[i]);
    
}







