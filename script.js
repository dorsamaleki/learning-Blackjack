//
//Blackjack
//by Dorsa
//


let suits = ["Diamond", "Hearts", "Spades", "Clubs"];

let values = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "King", "Queen", "Jack"];


let textArea = document.getElementById('text-area');
let newGameButton = document.getElementById('new-game-button');
let hitButton = document.getElementById('hit-button');
let stayButton = document.getElementById('stay-button');


let gameStarted = false;

showStatus();

newGameButton.addEventListener('click',function(){

  gameStarted = true;
  showStatus();
});







function showStatus(){


  if (!gameStarted){

    hitButton.style.display = 'none';
    stayButton.style.display = 'none';

  }

  else if (gameStarted){

    hitButton.style.display = 'inline';
    stayButton.style.display = 'inline';
    newGameButton.style.display = 'none';


    textArea.innerText = "Dealer Cards : " + DealerCardsString + "\n" + "Dealer score:" + getDealerScore() + "\n" + "\n" +
                        "player Cards : " + playerCardsString + "\n" + "player score :" + getPlayerScore();


  }

}

//show status badan 


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

  return card.value + " of " + card.suit;

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
  
  playerCardsString = playerCardsString + " \n " + getCardString(playerCards[i]); 

}


//console.log(playerCardsString);


let DealerCardsString = '';

for (let i = 0; i < DealerCards.length; i++){
  
  DealerCardsString = DealerCardsString + " \n " + getCardString(DealerCards[i]);

}



//console.log(DealerCardsString);



function getCardNumericValue(card){

  switch(card.value){

    case 'Ace':
      return 1;

    case 'Two':
      return 2;

    case 'Three':
      return 3;

    case 'Four':
      return 4;

    case 'Five':
      return 5;

    case 'Six':
      return 6;

    case 'Seven':
      return 7

    case 'Eight':
      return 8;

    case 'Nine':
      return 9;

    default:
      return 10;

  }

}



/* bara teste tabe bala 

let test = getCardNumericValue(playerCards[0]);
console.log(test);*/


/*function getScore(){

  let playerScore = getCardNumericValue(playerCards[0]) + getCardNumericValue(playerCards[1]) ;
  let DealerScore = getCardNumericValue(DealerCards[0]) + getCardNumericValue(DealerCards[1]) ;
//  console.log(playerScore);

}*/

//console.log(getScore());


function getPlayerScore(){

  let playerScore = getCardNumericValue(playerCards[0]) + getCardNumericValue(playerCards[1]) ;
  return playerScore;
}

function getDealerScore(){

  let DealerScore = getCardNumericValue(DealerCards[0]) + getCardNumericValue(DealerCards[1]) ;
  return DealerScore;
}








