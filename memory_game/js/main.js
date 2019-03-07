
// var cards = [
  // {
  //   rank: "queen",
  //   suit: 'hearts',
  //   cardImage: "images/queen-of-hearts.png"
  // },
  // {
  //   rank: "queen",
  //   suit: "diamonds",
  //   cardImage: "images/queen-of-diamonds.png"
  // },
  // {
  //   rank: "king",
  //   suit: "hearts",
  //   cardImage: "images/king-of-hearts.png"
  // },
  // {
  //   rank: "king",
  //   suit: "diamonds",
  //   cardImage: "images/king-of-diamonds.png"
  // }
// ];
// var cardsInPlay = [];
// function checkForMatch() {
//
//  setAttribute("src", cards[cardId].cardImage);
//   if(cardsInPlay[0]=== cardsInPlay[1]){
//     console.log(cards[cardId].cardImage);
//
//     console.log("You found the match");
//   } else {
//     alert("Sorry, try again");
//   }
// }
// var flipCard = function() {
//   var cardId = this.getAttribute("data-id");
//    cardsInPlay.push(cards[cardId].rank);
//    cardsInPlay.push(cards[cardId].suit);
//    cardsInPlay.push(cards[cardId].cardImage);
//     console.log("User Flipped " + cards[cardId].rank);
//     console.log("User Flipped " + cards[cardId].suit);
//     console.log("User Flipped " + cards[cardId].cardImage);
//     if(crdsInPlay.length === 2){
//       checkForMatch();
//     }
// }
// function createBoard() {
//   for(var i = 0; i < 3; i ++) {
//     var cardElement = document.createElement('img');
//         cardElement.setAttribute("src", "images/back.png");
//         cardElement.setAttribute("data-id", i);
//         cardElement.addEventListener("Click", flipCard);
//         //sdocument.getElementById("game-board").appendChild(cardElement);
//         flipCard();
//
//   }
// }
//
// createBoard();
//**********************************

var cards = [
  {
  rank: "queen",
  suit: 'hearts',
  cardImage: "images/queen-of-hearts.png"
},
{
  rank: "queen",
  suit: "diamonds",
  cardImage: "images/queen-of-diamonds.png"
},
{
  rank: "king",
  suit: "hearts",
  cardImage: "images/king-of-hearts.png"
},
{
  rank: "king",
  suit: "diamonds",
  cardImage: "images/king-of-diamonds.png"
}

];
var cardsInPlay = [];
var checkForMatch = function() {
if (cardsInPlay[0] === cardsInPlay[1]) {
console.log("You found a match!");
} else {
alert("Sorry, try again.");
}
}
var flipCard = function() {
      var cardId = this.getAttribute("data-id");
     console.log("User Flipped " + cards[cardId].rank + "\n" + cards[cardId].suit + "\n" +cards[cardId].cardImage);
       cardsInPlay.push(cards[cardId].rank);
       cardsInPlay.push(cards[cardId].suit);
       cardsInPlay.push(cards[cardId].cardImage);
       cardsInPlay.setAttribute("src", "cards[cardId].cardImage")
     if(cardsInPlay.length === 2){

         checkForMatch();
       } else {

       }

}

function createBoard() {
  for( var i = 0; i < cards.length; i++){
    var cardElement = document.createElement("img");
        cardElement.setAttribute('src', 'images/back.png');
       cardElement.setAttribute("data-id",i);
       cardElement.addEventListener('click', flipCard);
      document.getElementById("game-board").appendChild(cardElement);
   console.log(cardElement);
  }
}
createBoard();
