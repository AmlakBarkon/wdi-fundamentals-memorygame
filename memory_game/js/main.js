
// var carOne = "queen";
// var carTwo = "queen";
// var carThree = "king";
// var carFour = "king";
// console.log("User flipped " + carFour);
// console.log("User flipped " + carTwo);
var cards = ["queen", "king", "queen", "king"];
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
  console.log("The user flipped " +cards[cardId]);

  if( cardInPlay.length === 2) {
       checkForMatch();

}
}
flipCard(1);
flipCard(3);
