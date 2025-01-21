class  Box {
    height = 100;
    width = 200;

    restValues() {
        this.height = 0;
        this.width = 0;
    }

    setValues(height, width) {
        this.height = height;
        this.width = width;
    }

    printBox() {
        console.log(`height: ${this.height}, width: ${this.width}`);
    }

}

const myBox = new Box();
console.log(myBox);

myBox.height = 200;
console.log(myBox);

const enotherBox = new Box();
console.log(enotherBox);

enotherBox.setValues(300, 400);
enotherBox.printBox();
enotherBox.restValues();
enotherBox.printBox();

// console.log("************************** exercise 1 *********************");
// class Simple_User {
//     first = "gal";
//     last = "lavi";
//     age = "12";
//     password = "123";

//     setValues() {
        
//             const firstName = prompt("enter first name");
//             const lastName = prompt("enter last name");
//             const age = prompt("enter age");
//             const password = prompt("enter password");
        
        

//         if (firstName === this.first &&
//             lastName === this.last &&
//             age === this.age &&
//             password === this.password) {
//             alert("welcome");
//         } else {
//             alert("you wont change data?");
            
//         }
//     }
// }
// const p1 = new Simple_User();
// console.log(`typ of simple user: ${typeof p1}`);

// console.log(`first name:${p1.first}\nlast name: ${p1.last}\nage ${p1.age}`);
// p1.setValues();    

class Box2 {
    height;
    width;
    bgColor;
    text;
    color;
    borderRadius;
    textColor;
    textAlign;
    margin;
    display;

    constructor(newWidth, newHeight, newBgColor, newText, newColor, borderRadius, textColor, textAlign, margin, pedding, display, justifyContent) {
        this.height = newHeight;
        this.width = newWidth;
        this.bgColor = newBgColor;
        this.text = newText;
        this.color = newColor;
        this.borderRadius = borderRadius;
        this.textColor = textColor;
        this.textAlign = textAlign;
        this.margin = margin;
        this.pedding = pedding;
        this.display = display;
        this.justifyContent = justifyContent;
      
      
        const div = document.createElement("div");
        div.style.height = `${this.height}px`;
        div.style.width = `${this.width}px`;
        div.style.backgroundColor = this.bgColor;
        div.style.color = this.color;
        div.innerText = this.text;
        div.style.borderRadius = `${this.borderRadius}px`;
        div.style.color = this.textColor;
        div.style.textAlign = this.textAlign;
        div.style.margin = `${this.margin}`;
        div.style.pedding = `${this.pedding}px`;
        div.style.display = this.display;
        div.style.justifyContent = this.justifyContent;
        document.body.appendChild(div);

    }
}

const myBox2 = new Box2(300, 300, "red", "hello", "blue", 30, "yellow", "center", "auto", 145, "flex", "center");
