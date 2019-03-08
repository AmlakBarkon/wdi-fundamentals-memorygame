// var cards = [
//  {
//    rank: "queen",
//    suit: "hearts",
//    cardImage: "images/queen-of-hearts.png"
//  },
//  {
//    rank: "queen",
//    suit: "diamonds",
//    cardImage: "images/queen-of-diamonds.png"
//  },
//  {
//    rank: "king",
//    suit: "hearts",
//    cardImage: "images/king-of-hearts.png"
//  },
//  {
//    rank: "king",
//    suit: "diamonds",
//    cardImage: "images/king-of-diamonds.png"
//  }
// ];

var cards = [ "queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = cards[1];
var cardTwo = cards[2];
cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardsInPlay[0]);
console.log("User flipped " + cardsInPlay[1]);

if(cardsInPlay.length === 2) {
  if(cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match");
  } else {
    alert("Sorry, try again");
  }
}
