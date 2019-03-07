
// var carOne = "queen";
// var carTwo = "queen";
// var carThree = "king";
// var carFour = "king";
// console.log("User flipped " + carFour);
// console.log("User flipped " + carTwo);
var cards = [
{
  rank: "queen",
  suit: "hearts",
  cardImages: "images/queen-of-hearts.png"
},
{
  rank: "queen",
  suit: "diamonds",
  cardImages: "images/queen-of-diamonds.png"
},
{
  rank: "king",
  suit: "hearts",
  cardImages: "images/king-of-hearts.png"
},
{
  rank: "king",
  suit: "diamonds",
  cardImages: "images/king-of-diamonds.png"
}
];
var cardInPlay = [];
function checkForMatch() {
  if(cardInPlay[0] === cardInPlay[2]){
    alert("You found a match");
  }
  else {
   alert("Sorry, try again");
 }

}
function flipCard( cardId){
     console.log(cards[cardId].rank);
     console.log(cards[cardId].suit);
  cardInPlay.push(cards[cardId].rank);
  cardInPlay.push(cards[cardId].suit);
   cardInPlay.push(cards[cardId].cardImages);

   checkForMatch();

  if( cardInPlay.length === 2) {


}
}
flipCard(1);
flipCard(2);
