const styleElement = (element) => {
    element.style.backgroundColor = 'red';
    element.style.color = 'white';
    element.style.fontSize = '20px';
    element.style.textShadow = '2px 3px 5px black';
    element.style.textAlign = 'center';
}

const styleElement2 = (element) => {
    element.style.backgroundColor = 'black';
    element.style.color = 'yellow';
    element.style.padding = '20px';
    element.style.margin = '20px';
    element.style.borderRadius = '20px';
    element.style.border = '1px solid yellow';
    element.style.boxShadow = '0px 0px 10px yellow';
}

const styleElement3 = (element) => {
    console.log(element.style.backgroundColor);
    console.log(element.style.color);
    console.log(element.style.fontSize);


}


const select = document.getElementById('select');
styleElement(select);
styleElement2(select);
styleElement3(select);

const container = document.getElementById('container');
styleElement(container);


const empty = document.getElementById('empty');

const h2 = document.createElement('h2');
h2.innerText = 'i am a h2';

empty.appendChild(h2);


console.log("*********************Exercise1*******************");

const emptydiv = function () {
    const div = document.createElement('div');
    div.style.height = '100px';
    div.style.width = '100px';
    div.style.backgroundColor = 'blue';
    div.innerText = 'hello';
    document.body.appendChild(div);
    div.id = 'div';

}
emptydiv();

console.log("*********************Exercise2*******************");

const emptyH2 = () => {
    const h2 = document.createElement('h2');
    h2.innerText = 'new title';
    h2.style.backgroundColor = 'gray';
    h2.style.color = 'blue';
    h2.style.textAlign = 'center';
    document.body.appendChild(h2);
    h2.id = 'h2';

}

emptyH2();

console.log("*********************Exercise3*******************");

const emptyA = function () {
    const a = document.createElement('a');
    a.href = 'https://www.gogle.com/';
    a.innerText = 'go to a gogle';
    a.target = '_blank';
    document.body.appendChild(a);
    a.id = 'a';
}

emptyA();


console.log("*********************Exercise4*******************")

const emptyDivA = () => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    div.style.height = '200px';
    div.style.width = '200px';
    div.style.margin = 'auto';
    div.style.border = '2px solid black';
    const a = document.createElement('a');
    a.href = 'https: //www.gogle.com';
    a.innerText = 'go to gogle';
    a.target = '_blank';
    div.style.backgroundColor = 'red'
    div.appendChild(a);
    div.style.display = 'flex';
    div.style.justifyContent = 'center';
    div.style.alignItems = 'center';
    div.id = 'divA';
    div.style.borderRadius = '50%';
    div.style.boxShadow = ' 0px 0px 40px red'
}

emptyDivA();

console.log("********************* remove element ********************");

const removBox1 = () => {
    const box1 = document.getElementById('box1');
    document.body.removeChild(box1);
}

const removBox2 = () => {
    document.body.removeChild(document.getElementById('box2'))
}

const renovItemFromList = () => {
    const list = document.getElementById('list');
    const listItems = list.querySelectorAll('li');

    list.innerHTML = '';
    listItems.forEach((item) => {
        if (item.innerText === 'yes') {
            list.appendChild(item);
            item.style.color = 'green';
            list.style.backgroundColor = 'aqua';


        } if (item.innerText === 'no') {
            list.appendChild(item);
            item.style.color = 'red';
        }
    });
}

const removCss = () => {
    const link = document.querySelector('link');
document.head.removeChild(link);
}

console.log("*************** events ***************");
const printSelect = () => {
    const selsct = document.getElementById('select');
    console.log(selsct.value);
    
}

console.log("*************** eventLisetner **************");
const cricle = document.querySelector('.cricle');

cricle.addEventListener('click', (event) => {
    event.target.style.backgroundColor = `rgb(${Math.ceil(Math.random() * 255)},${Math.ceil(Math.random() * 255)},${Math.ceil(Math.random() * 255)})`

;
console.log(event);

});
