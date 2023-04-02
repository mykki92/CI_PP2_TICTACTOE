const cards = document.querySelectorAll('.game-card');

//card flip
let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;

function flipCard () {
    if (lockBoard) return;
    if (this === firstCard) return;
    this.classList.add('flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
   }

   secondCard = this;

   checkForMatch();
}

//check for matching cards referencing their data frameworks
function checkForMatch() {
   if (firstCard.dataset.framework === secondCard.dataset.framework) {
     disableCards();
     return;
   }

   unflipCards();
}

//prevents cards from flipping back once they have matched
function disableCards() {
   firstCard.removeEventListener('click', flipCard);
   secondCard.removeEventListener('click', flipCard);
   resetBoard();
}

//unflips cards after unsuccessful attempt
function unflipCards() {
    lockBoard = true;

   setTimeout(() => {
     firstCard.classList.remove('flip');
     secondCard.classList.remove('flip');

     resetBoard();
   }, 1500);
 }

//resets the variables after each turn
function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

//shuffles card positions
(function shuffle() {
    cards.forEach(card => {
      let ramdomPos = Math.floor(Math.random() * 12);
      card.style.order = ramdomPos;
    });
  })();

cards.forEach(card => card.addEventListener('click', flipCard));