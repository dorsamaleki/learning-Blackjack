//
//Blackjack
//by Dorsa
//


let suits = ["Diamond", "Hearts", "Spades", "Clubs"];

let values = ["Ace", "Two", "three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "King", "Queen", "Jack"];


let textArea = document.getElementById('text-area');
let newGameButton = document.getElementById('new-game-button');
let hitButton = document.getElementById('hit-button');
let stayButton = document.getElementById('stay-button');


hitButton.style.display = 'none';
stayButton.style.display = 'none';




function createDeck(){

  let Deck = [];

  for (let suitIDX = 0; suitIDX < suits.length; suitIDX++){

    for (let valueIDX = 0; valueIDX < values.length; valueIDX++){
          
      let card = {

        suit:suits[suitIDX],

        value:values[valueIDX]

      };

      Deck.push(card);

    }
  } 

  return Deck;

}


let Deck = createDeck();


function getCardString(card){

  return card.value + "of" + card.suit;

}


/*for(let i = 0; i < Deck.length; i++){

  console.log(Deck[i]);

}
test khorojie stringe karta
*/


function shuffleDeck(Deck){

  for(let i = 0; i < Deck.length; i++){

    let swapIDX = Math.trunc(Math.random()*Deck.length);

    //swap
    let tmp = Deck[swapIDX];
    Deck[swapIDX] = Deck[i];
    Deck[i] = tmp; 
   
    }
}





function getNextCard(){

  shuffleDeck(Deck);

  return Deck.shift();

}



let playerCards = [getNextCard(), getNextCard()];

let DealerCards = [getNextCard(), getNextCard()];

/*console.log(playerCards);
console.log(DealerCards);
kart haro mide vali object
*/


let playerCardsString = ''; //ye stringe

for (let i = 0; i < playerCards.length; i++){
  
  playerCardsString = playerCardsString + " , " +getCardString(playerCards[i]); 

}


console.log(playerCardsString);


let DealerCardsString = '';

for (let i = 0; i < DealerCards.length; i++){
  
  DealerCardsString = DealerCardsString + " , " +getCardString(DealerCards[i]);

}


console.log(DealerCardsString);


