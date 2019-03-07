
// var carOne = "queen";
// var carTwo = "queen";
// var carThree = "king";
// var carFour = "king";
// console.log("User flipped " + carFour);
// console.log("User flipped " + carTwo);
var cards = ["queen", "king", "queen", "king"];
var cardInPlay = [];
var cardOne = cardInPlay.push(cards[0]);
var cardTwo = cardInPlay.push(cards[1]);
var cardThree = cardInPlay.push(cards[2]);
var cardFour = cardInPlay.push(cards[3]);
console.log("User flipped " + cardInPlay[cardOne]);
console.log("User flipped " + cardInPlay[cardTwo]);
if( cardInPlay.length === 2) {
 if(cardInPlay[0] === cardInPlay[2]){
   alert("You found a match");
 }
} else {
  alert("Sorry, try again");
}
