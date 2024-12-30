console.log(document);

console.log("****************** getElementbyid ********************");

const title = document.getElementById("title");
console.log(title.innerHTML);


console.log("****************** getElementbyclassname ***************");

const containers = document.getElementsByClassName('container');
console.log(containers);
console.log(containers[0].innerhtml);
console.log(containers[0].innerText);

console.log("****************** querySelector ********************");

const container = document.querySelector('.container');
console.log(container);

const title2 = document.querySelector('#title');
console.log(title2);

const titleOfContainer = document.querySelector('.container > h1');
console.log(titleOfContainer);

console.log("****************** querySelectorAll ********************");
const titleOfContainers = document.querySelectorAll('.container > h1');
console.log(titleOfContainers);



console.log("****************** Excercise1 ********************");

const titleOfContainers2 = () => {
   const listItems = document.querySelectorAll('li');
   listItems.forEach(item => {
    console.log(item.innerHTML);
    
   })

    
}

titleOfContainers2();

console.log("****************** Exercise2 ********************");

const titleOfContainers3 = () => {
    const getClass = document.getElementsByClassName('container');
   Array.from(getClass).forEach(getClass => {
        console.log(getClass.innerText);
        
    })
}

titleOfContainers3();

console.log("****************** Exercise3 ********************");


const titleOfContainers4 = () => {
    const getselectors = document.querySelectorAll('.container'); // השתמש בנקודה
    getselectors.forEach(item => {
        console.log(item.innerText);
    });
}

titleOfContainers4();


console.log("****************** innerHtml*************");

const createArticle = () => {




const article = document.querySelector('.article');
article.innerHTML = `
<h2>article title</h2>
<p>
lorm ipsum rikn of the tutle locale is very god
</p>
<h2>article title</h2>
<p>
lorm ipsum rikn of the tutle locale is very god
</p>
<h2>article title</h2>
<p>
lorm ipsum rikn of the tutle locale is very god
</p>
`
console.log(article.innerHTML);
console.log(article.innerText);

}

console.log("******************** attributes *************************");

article.style = 'background-color: lightblue; padding: 10px;';

