const cardsArray = [
    'A', 'A', 'B', 'B', 'C', 'C', 'D', 'D',
    'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H'
];

let cardElements = [];
let firstCard = null;
let secondCard = null;
let lockBoard = false;
let score = 0;

const gameContainer = document.getElementById('game-container');
const scoreDisplay = document.getElementById('score');
const restartButton = document.getElementById('restart-button');

// Shuffle cards
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

// Create card elements
function createCards() {
    shuffle(cardsArray);
    cardsArray.forEach(value => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.value = value;
        card.addEventListener('click', flipCard);
        gameContainer.appendChild(card);
        cardElements.push(card);
    });
}

// Flip card
function flipCard() {
    if (lockBoard || this === firstCard) return;

    this.classList.add('flipped');
    this.textContent = this.dataset.value;

    if (!firstCard) {
        firstCard = this;
        return;
    }

    secondCard = this;
    lockBoard = true;

    checkForMatch();
}

// Check for match
function checkForMatch() {
    const isMatch = firstCard.dataset.value === secondCard.dataset.value;

    isMatch ? disableCards() : unflipCards();
}

// Disable matched cards
function disableCards() {
    firstCard.classList.add('matched');
    secondCard.classList.add('matched');
    score++;
    updateScore();
    resetBoard();
}

// Unflip cards
function unflipCards() {
    setTimeout(() => {
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');
        firstCard.textContent = '';
        secondCard.textContent = '';
        resetBoard();
    }, 1000);
}

// Reset board
function resetBoard() {
    [firstCard, secondCard, lockBoard] = [null, null, false];
}

// Update score
function updateScore() {
    scoreDisplay.textContent = `ניקוד: ${score}`;
    localStorage.setItem('memoryGameScore', score);
}

// Restart game
function restartGame() {
    cardElements.forEach(card => {
        card.remove();
    });
    cardElements = [];
    score = 0;
    updateScore();
    createCards();
}

// Load score from local storage
function loadScore() {
    const savedScore = localStorage.getItem('memoryGameScore');
    if (savedScore) {
        score = parseInt(savedScore);
        updateScore();
    }
}

// Event listeners
restartButton.addEventListener('click', restartGame);

// Initialize game
loadScore();
createCards();