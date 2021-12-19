let player = {
  name: "Bob",
  chips: 25,
};
let firstCard;
let secondCard;
let cards = [];
let sum;
let hasBlackJack;
let isAlive;
let message = "";

let playerEl = document.querySelector("#player-el");
let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");
let newEl = document.querySelector("#new-btn");

playerEl.textContent = player.name + ": $" + player.chips;

function startGame() {
  hasBlackJack = false;
  isAlive = true;
  firstCard = getRandomCard();
  secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: ";

  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "Sum: " + sum;
  if (sum === 21) {
    hasBlackJack = true;
    message = "Congratulations, you've got Blackjack!";
  } else if (sum < 21) {
    message = "Do you want to draw a new card?";
  } else {
    isAlive = false;
    message = "Tough luck! You're out of the game.";
  }

  messageEl.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackJack == false) {
    let newCard = getRandomCard();
    cards.push(newCard);
    sum += newCard;
    renderGame();
  } else {
    return;
  }
}

function getRandomCard() {
  let randNum = Math.floor(Math.random() * 13) + 1;
  if (randNum === 1) {
    return 11;
  } else if (randNum > 10) {
    return 10;
  } else {
    return randNum;
  }
}
