

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
        description: 'מחשב מהטובים ביותר תיהיה איתו פעם אחת ולא תרצה לעזוב אותו לעולם',
        image: '../../img/מחשב נייד רשימת קניות.jpg',        
    },
    {
        id: 3,
        title: 'samsung s21 טלפון', 
        price: 4700,
        description: 'טלפון מהטובים ביותר תקנה אותו פעם אחת ולא תרצה לעזוב אותו לעולם',
        image: '../../img/טלפון נייד רשימת קניות.jpeg',        
    },
    {
        id: 4,
        title: 'מצלמה',
        price: 570,
        description: 'מצלמה מהטובות ביותר תשתמש איתה פעם אחת ולא תרצה לעזוב אותה לעולם',
        image: '../../img/מצלמה רשימת קניות.jpg',        
    },
    {
        id: 5,
        title: 'מקרן',
        price: 240,
        description: 'מקרן מהטובים ביותר תשתמש איתו פעם אחת ולא תרצה לעזוב אותו לעולם',
        image: '../../img/מקרן רשימת קניות.jpg',        
    },
    {
        id: 6,
        title: 'טאבלט',
        price: 2800,
        description: 'טאבלט מהטובים ביותר תקנה אותו פעם אחת ולא תרצה לעזוב אותו לעולם',
        image: '../../img/טאבלט רשימת קניות.jpg',        
    },
    {
        id: 7,
        title: 'שעון חכם',
        price: 350,
        description: 'שעון מהחכמים בעולם תשתמש איתו פעם אחת ולא תרצה לעזוב אותו לעולם',
        image: '../../img/שעון חכם רשימת קניות.jpg',        
    },
    {
        id: 8,
        title: 'מחשב נייח',
        price: 3500,
        description: 'מחשב מהטובים ביותר תיהיה איתו פעם אחת ולא תרצה לעזוב אותו לעולם',
        image: '../../img/מחשב נייח רשימת קניות.jpeg',        
    },
    {
        id: 9,
        title: 'טלוויזיה',
        price: 8000,
        description: 'טלוויזיה מהטובים ביותר תיהיה איתו פעם אחת ולא תרצה לעזוב אותו לעולם',
        image: '../../img/טלויזייה רשימת קניות.jpg',        
    },
   ];
   



let cartItems = [];
let favoriteItems = localStorage.getItem('favoriteItems') ? JSON.parse(localStorage.getItem('favoriteItems')) : [];


const cardsContainer = document.getElementById('cards');

// פונקציה להצגת המוצרים הרגילה
function displayProducts() {
    cardsContainer.innerHTML = '';
    cards.forEach(card => {
        const isFavorite = favoriteItems.some(item => item.id === card.id);
        cardsContainer.innerHTML += `
            <div class="card p-3 m-3 d-flex flex-column flex-wrap: wrap align-items-center" >
                <div class="d-flex justify-content-end w-100">
                    <button onclick="toggleFavorite(${card.id})" class="btn favorite-btn ${isFavorite ? 'active' : ''}">
                        ❤️
                    </button>
                </div>
                <img src="${card.image}" class="card-img-top w-100" alt="${card.title}">
                <div class="card-body">
                    <h5 class="card-title">${card.title}</h5>
                    <p class="card-text">${card.description}</p>
                    <p class="card-text" id="price">${card.price} $</p>
                    <button onclick="addToCart(${card.id})" class="btn btn-primary shadow-md w-100 mt-auto">הוסף לסל</button>
                </div>
            </div>
        `;
    });
}

function toggleFavorite(productId) {
    const product = cards.find(card => card.id === productId);
    const existingIndex = favoriteItems.findIndex(item => item.id === productId);

    if (existingIndex !== -1) {
        // הסר מהמועדפים
        favoriteItems.splice(existingIndex, 1);
        localStorage.removeItem('favoriteItems');
        
    } else {
        // הוסף למועדפים
        favoriteItems.push(product);
        localStorage.setItem('favoriteItems', JSON.stringify(favoriteItems));
    }

    // עדכן את התצוגה הנוכחית
    if (document.querySelector('.favorites-view')) {
        displayFavorites();
    } else {
        displayProducts();
    }
}

function displayFavorites() {
    cardsContainer.innerHTML = `
        <div class="container favorites-view">
            <h2>המוצרים המועדפים שלך</h2>
            <button onclick="displayProducts()" class="btn btn-primary mb-4">חזרה לחנות</button>
            <div class="row">
                ${favoriteItems.map(item => `
                    <div class="card w-25 p-3 m-3">
                        <div class="d-flex justify-content-end w-100">
                            <button onclick="toggleFavorite(${item.id})" class="btn favorite-btn active">
                                ❤️
                            </button>
                        </div>
                        <img src="${item.image}" class="card-img-top w-100" alt="${item.title}">
                        <div class="card-body">
                            <h5 class="card-title">${item.title}</h5>
                            <p class="card-text" id="price">${item.price} $</p>
                            <button onclick="addToCart(${item.id})" class="btn btn-primary shadow-md w-100 mt-auto">הוסף לסל</button>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

 function addToCart(productId) {
    const product = cards.find(card => card.id === productId);
    if (product) {
        cartItems.push(product);

        // הצג את הפופאפ
        const popup = document.getElementById('successPopup');
        popup.innerHTML = `
        <div class=" d-flex align-items-center justify-content-center flex-column">
        <h2>${product.title} נוסף לעגלה!</h2>
        <p>${product.price} $</p>
        </div>
        `;
        popup.classList.add('show');

        // הסתר את הפופאפ אחרי 1.5 שניות
        setTimeout(() => {
            popup.classList.remove('show');
        }, 2000);
    }
}

// פונקציה להצגת העגלה
function displayCart() {
    const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

    cardsContainer.innerHTML = `
        <div class="container">
            <h2>העגלה שלך</h2>
            <h3>סה"כ לתשלום: $${totalPrice.toFixed(2)}</h3>
            <button onclick="displayProducts()" class="btn btn-primary mb-4">חזרה לחנות</button>
            <div class="row">
                ${cartItems.map(item => `
                    <div class="card  p-3 m-3">
                        <img src="${item.image}" class="card-img-top w-100" alt="${item.title}">
                        <div class="card-body">
                            <h5 class="card-title">${item.title}</h5>
                            <p class="card-text" id="price">${item.price} $</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

document.getElementById('inputLike').addEventListener('click', displayFavorites);

// הצגה ראשונית של המוצרים
displayProducts();

// הוספת Event Listener לכפתור העגלה
document.getElementById('showAll').addEventListener('click', displayCart);

