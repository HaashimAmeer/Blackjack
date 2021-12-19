let firstCard = 6;
let secondCard = 9;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

if (sum === 21) {
  hasBlackJack = true;
  message = "Congratulations, you've got Blackjack! 🥳";
} else if (sum < 21) {
  message = "Do you want to draw a new card? 🙃";
} else {
  isAlive = false;
  message = "Tough luck! You're out of the game. 😭";
}
