

const cards = [
    {
        id: 1,
        title: 'אוזניות',    
        price: 99.90,
        description: 'אוזניות מהטובות ביותר שים אותם פעם אחת ולא תרצה לעזוב אותם לעולם',
        image: '../../img/אוזניות רשימת קניות.png',
    },
    {
        id: 2,
        title: 'מחשב נייד',
        price: 1499.90,
        description: 'תיאור מוצר 2',
        image: '../../img/מחשב נייד רשימת קניות.jpg',        
    },
    {
        id: 3,
        title: 'samsung s21 טלפון', 
        price: 4700,
        description: 'תיאור מוצר 3',
        image: '../../img/טלפון נייד רשימת קניות.jpeg',        
    },
    {
        id: 4,
        title: 'מצלמה',
        price: 570,
        description: 'תיאור מוצר 4',
        image: '../../img/מצלמה רשימת קניות.jpg',        
    },
    {
        id: 5,
        title: 'מקרן',
        price: 240,
        description: 'תיאור מוצר 5',
        image: '../../img/מקרן רשימת קניות.jpg',        
    },
    {
        id: 6,
        title: 'טאבלט',
        price: 2800,
        description: 'תיאור מוצר 6',
        image: '../../img/טאבלט רשימת קניות.jpg',        
    },
    {
        id: 7,
        title: 'שעון חכם',
        price: 350,
        description: 'תיאור מוצר 7',
        image: '../../img/שעון חכם רשימת קניות.jpg',        
    },
    {
        id: 8,
        title: 'מחשב נייח',
        price: 3500,
        description: 'תיאור מוצר 8',
        image: '../../img/מחשב נייח רשימת קניות.jpeg',        
    },
    {
        id: 9,
        title: 'טלוויזיה',
        price: 8000,
        description: 'תיאור מוצר 9',
        image: '../../img/טלויזייה רשימת קניות.jpg',        
    },
   ];
   

const cardsContainer = document.getElementById('cards');

cards.forEach(card => {
   
  cardsContainer.innerHTML += `
    <div class="card w-25 ">
        <img src="${card.image}" class="card-img-top" alt="${card.title}">
        <div class="card-body">
            <h5 class="card-title">${card.title}</h5>
            <p class="card-text">${card.description}</p>
            <p class="card-text" id="price">${card.price} $</p>
            <a href="#" class="btn btn-primary">הוסף לסל</a>
        </div>
    </div>
    
  `;     
  
    
})



