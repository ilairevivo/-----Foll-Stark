const load = () => {
    const storageName = localStorage.getItem("name");
    const tytle = document.getElementById('tytle');

    const storageColorsHtml = localStorage.getItem("colors");
    const list = document.getElementById('list');
    list.innerHTML = storageColorsHtml || "";
    tytle.innerHTML = "Hello " + tytle;
    if (storageName !== null) {
        tytle.innerHTML = "hello " + storageName;
    }
}
window.onload = load;


const save = () => {
    const name = document.getElementById('name');
    const tytle = document.getElementById('tytle');

    tytle.innerHTML = "HEllo " + name.value;
    localStorage.setItem("name", name.value);
}

//פונקציה לאופספת צבע לרשימה
function pickColor() {
    const color = document.getElementById("colors").value;
    const colorLi = document.createElement('li');
    const colorText = colorLi.innerText = color;

    // הוספת עיצוב לפריט
    colorLi.style.color = "black";
    colorLi.style.backgroundColor = color;
    colorLi.style.padding = "10px";
    colorLi.style.margin = "10px";
    colorLi.style.borderRadius = "10px";
    colorLi.innerHTML = `<h2>${colorText}</h2>`;
    colorLi.style.textAlign = "center";
    colorLi.style.width = "200px";
    colorLi.style.boxShadow = `5px 5px 10px ${color}`;

    // הוספת הפריט לרשימה
    const list = document.getElementById("list");
    const colorArr = list.getElementsByTagName("li");

    for (let i = 0; i < colorArr.length; i++) {
        if (colorArr[i].innerText === color) {
            alert("הצבע כבר קיים ברשימה");
            return;
        }
    }
    list.appendChild(colorLi);
    localStorage.setItem("colors", list.innerHTML);
}

const people = [
    {
        name: "John",
        age: 25,
    },
    {
        name: "Jane",
        age: 30,
    },
    {
        name: "Jim",
        age: 35,
    },
];




const jsonString = JSON.stringify(people);

console.log(people);
console.log(jsonString);

localStorage.setItem("people", jsonString);

const data = localStorage.getItem("people");
const parsed = JSON.parse(data);
parsed.push({ name: "joe", age: 40 });
console.log(parsed);

localStorage.getItem("people", JSON.stringify(parsed))


console.log("************************ demo JSON ***************************");
//1..צרו מערך המכיל שמות בעלי חיים והכניסו אותו ל-localStorage

//2..מישכו את המערך מהמחסן היפכו לאובייקט סטנדרטי והסירו ממנו את בעל החיים האחרון

//3. הכניסו את המערך המעודכן בחזרה ל - localstorage

//4.בידקו שכל המידע נכנס כמו שצריך


const animals = ["cat", "dog", "kitten", "shark", "fish", "tiger", "bear"]

const jsonString2 = JSON.stringify(animals);
 localStorage.setItem("animals", jsonString2);

const data2 = localStorage.getItem("animals");
const parsed2 = JSON.parse(data2);
parsed2.pop();

console.log(parsed2);


localStorage.setItem("animals", parsed2);


